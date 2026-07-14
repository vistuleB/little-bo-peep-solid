import {
  Accessor,
  createEffect,
  createSignal,
  ParentProps,
  onCleanup,
  onMount,
  Setter,
  Show,
  untrack,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import {
  BATCH_SOLUTION_SCROLL_ANCHOR_FRAMES,
  DESKTOP_TEXT_COLUMN_WIDTH,
  SOLUTION_GREEN_DIV_HEIGHT,
  MOBILE_MAX_WIDTH,
  PREV_NEXT_EXERCISE_BUTTON_WIDTH,
  PREV_NEXT_EXERCISE_BUTTON_CORNER_RADIUS,
} from "~/constants";
import { twJoin } from "tailwind-merge";

const SOLUTION_BUTTON_INLINE_PADDING = 20;
import { Spacer } from "./Spacer";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  useExercisesContext,
  useExercisesStateHelpers,
} from "~/store/ExercisesStoreProvider";
import smoothScrollTo from "~/utils/smoothScrollTo";
import {
  HeightChangeListenerProvider,
  useHeightChangeListenerContext,
} from "~/store/HeightChangeListenerProvider";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";
import { useOneExerciseContext } from "~/store/OneExerciseStoreProvider";
import { LazyImageProvider } from "~/store/LazyImageProvider";
import { useExerciseGroupRegistry } from "~/store/ExerciseGroupRegistryProvider";
import {
  createSolutionMathJaxController,
  prepareSolutionMathJax,
  SolutionMathJaxProvider,
} from "~/store/SolutionMathJaxProvider";

type SolutionProps = ParentProps &
  SharedProps & {
    re_calculate_height?: boolean;
  };

const SpaceBetweenStatementAndSolutionButton = () => (
  <Spacer height="var(--document-exercise-statement-to-solution-button-space)" />
);

const SpaceAfterSolutionButtonAlwaysShowing = () => (
  <Spacer height="var(--document-before-solution-space)" />
);

const ExtraSpaceBetweenSolutionButtonAndSolutionWhenSolutionShowing = () => (
  <Spacer height="var(--document-before-open-solution-extra-space)" />
);

const SpaceBeforeNextExerciseWhenNotLastExerciseInListViewAlwaysShowing =
  () => (
    <Spacer height="var(--document-after-solution-before-next-exercise-space)" />
  );

const SpaceBeforeBackupArrow = () => (
  <Spacer height="var(--document-before-backup-arrow-space)" />
);

const SolutionHeightChangeListener = (props: { resetter: () => void }) => {
  const context = useHeightChangeListenerContext();

  createEffect(() => {
    context?.height_change_listener_store.re_calculate_height;
    props.resetter();
    requestAnimationFrame(props.resetter);
    window.setTimeout(props.resetter, 50);
  });

  return <></>;
};

export const Solution = (props: SolutionProps) => {
  let ref: HTMLDivElement | undefined;
  let observed_math_preparation: Promise<boolean> | undefined;
  const solutionMathJax = createSolutionMathJaxController();

  let { store: global_store } = useGlobalContext();
  const {
    exercises_store: store,
    group_id,
    at_end_of_page,
  } = useExercisesContext();
  let {
    store: { number: solution_number },
  } = useOneExerciseContext();
  const { updateExerciseByIndex } = useExercisesStateHelpers();

  const solution_open = () =>
    store.exercises[solution_number - 1]?.solution_open;
  const transition_duration = () =>
    store.exercises[solution_number - 1]?.transition_duration;
  const num_exercises = () => store.exercises.length;

  let [content_height, set_content_height] = createSignal(0);
  let [bot_div, set_bot_div] = createSignal(false);
  let [solution_fully_opened, set_solution_fully_opened] = createSignal(false);
  let [handle, set_handle] = createSignal<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [green_div_transition, set_green_div_transition] = createSignal(0);
  const [solution_transition, set_solution_transition] = createSignal(0);
  const [green_div_height, set_green_div_height] = createSignal(
    SOLUTION_GREEN_DIV_HEIGHT,
  );
  const [solution_content_mounted, set_solution_content_mounted] =
    createSignal(false);

  const handleResize = () => {
    set_content_height(ref?.clientHeight || 0);
  };

  const reset_content_height_etc = () => {
    props.re_calculate_height; // re-calc on change
    if (ref?.clientHeight) {
      set_content_height(ref?.clientHeight || 0);
      updateExerciseByIndex(solution_number - 1, {
        field: "transition_duration",
        value: global_store.animations
          ? Math.min(ref?.clientHeight, 1000) * 0.8
          : 0,
      });
    }
  };

  const prepare_solution_math = () => {
    const preparation = untrack(() => prepareSolutionMathJax(solutionMathJax));
    if (preparation === observed_math_preparation) return;
    observed_math_preparation = preparation;
    void preparation
      .then((succeeded) => {
        if (!succeeded) return;
        reset_content_height_etc();
        requestAnimationFrame(reset_content_height_etc);
      })
      .finally(() => {
        if (observed_math_preparation === preparation) {
          observed_math_preparation = undefined;
        }
      });
  };

  const mount_solution_content = () => {
    if (solution_content_mounted()) {
      prepare_solution_math();
      return;
    }
    set_solution_content_mounted(true);
    requestAnimationFrame(() => {
      reset_content_height_etc();
      prepare_solution_math();
    });
  };

  createEffect(() => {
    if (!solution_open()) return;
    mount_solution_content();
  });

  createEffect(() => {
    reset_content_height_etc();
    setTimeout(() => {
      if (solution_open()) {
        reset_content_height_etc();
      }
    }, 50);
    setTimeout(() => {
      if (solution_open()) {
        reset_content_height_etc();
      }
    }, 500);
    setTimeout(() => {
      if (solution_open()) {
        reset_content_height_etc();
      }
    }, 1200);
  });

  createEffect(() => {
    if (solution_open()) {
      window.addEventListener("scroll", handleResize);
      setTimeout(() => {
        set_bot_div(false);
      }, transition_duration());
    } else {
      window.removeEventListener("scroll", handleResize);
      setTimeout(() => {
        set_bot_div(true);
      }, transition_duration());
    }

    onCleanup(() => window.removeEventListener("scroll", handleResize));
  });

  createEffect(() => {
    // green div height
    // if exercise question is too small we increase green div height
    const _section = document.querySelector(
      `[data-exercise-group-id="${group_id}"]`,
    );
    let exo = (_section ?? document)
      .querySelectorAll(".exercise")
      ?.item(solution_number - 1);
    if (exo?.clientHeight < 200 + green_div_height()) {
      set_green_div_height(700);
    } else {
      set_green_div_height(SOLUTION_GREEN_DIV_HEIGHT);
    }
    store.selected_exo; // re-run
  });

  createEffect(() => {
    // green div transition
    if (solution_fully_opened() || !solution_open()) {
      set_green_div_transition(transition_duration());
      setTimeout(() => {
        set_green_div_transition(0);
      }, transition_duration());
    }
  });

  onMount(() => {
    set_solution_fully_opened(solution_open());
    setTimeout(() => {
      set_solution_fully_opened(solution_open());
    }, 100);
  });

  return (
    <HeightChangeListenerProvider>
      <SolutionHeightChangeListener resetter={reset_content_height_etc} />
      <SpaceBetweenStatementAndSolutionButton />
      <SolutionButton
        handle={handle}
        set_handle={set_handle}
        set_solution_fully_opened={set_solution_fully_opened}
        set_solution_transition={set_solution_transition}
        solution_number={solution_number}
        mount_solution_content={mount_solution_content}
        resetter={reset_content_height_etc}
      />
      <SpaceAfterSolutionButtonAlwaysShowing />

      {/* Actual Solution */}
      <div
        class={twJoin(
          "relative transition-all",
          !solution_open() && "pointer-events-none",
          (!solution_open() || !solution_fully_opened()) && "overflow-y-clip",
        )}
        style={{
          height: `${solution_open() ? content_height() : 0}px`,
          "transition-duration": `${global_store.animations ? solution_transition() : 0}ms`,
          "transition-property": "height",
        }}
      >
        <div
          ref={ref}
          style={{
            position: solution_fully_opened() ? "relative" : "absolute",
          }}
          class={twJoin(" bottom-0 w-full")}
        >
          <ExtraSpaceBetweenSolutionButtonAndSolutionWhenSolutionShowing />
          <Show when={solution_content_mounted()}>
            {() => (
              <SolutionMathJaxProvider controller={solutionMathJax}>
                <LazyImageProvider>{props.children}</LazyImageProvider>
              </SolutionMathJaxProvider>
            )}
          </Show>
        </div>
        <div
          style={{
            width: `${global_store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_TEXT_COLUMN_WIDTH : global_store.innerWidth}px`,
            height: "var(--document-before-open-solution-extra-space)",
          }}
          class={twJoin(
            "absolute top-0 left-1/2 -translate-x-1/2 bg-bg",
            solution_fully_opened() && "opacity-0",
          )}
        ></div>
      </div>
      {store.list_view && solution_number !== num_exercises() && (
        <SpaceBeforeNextExerciseWhenNotLastExerciseInListViewAlwaysShowing />
      )}
      {at_end_of_page && (
        <>
          {/* Possible backup arrow */}
          {(!store.list_view || solution_number === num_exercises()) && (
            <>
              <SpaceBeforeBackupArrow />
              <BackupArrow
                solution_open={solution_open}
                solution_fully_opened={solution_fully_opened}
                solution_transition={solution_transition}
                bot_div={bot_div}
              />
            </>
          )}
          {/* Green Div */}
          <div
            class="text-column transition-all col-start-2"
            style={{
              height: `${(!store.list_view || solution_number === num_exercises()) && (!solution_open() || bot_div()) ? green_div_height() : 0}px`,
              "background-color": global_store.show_areas ? "#00440050" : "",
              "transition-duration": `${global_store.animations ? green_div_transition() : 0}ms`,
            }}
          ></div>
        </>
      )}
    </HeightChangeListenerProvider>
  );
};

type SolutionBtnProps = {
  handle: Accessor<ReturnType<typeof setTimeout> | null>;
  set_handle: Setter<ReturnType<typeof setTimeout> | null>;
  solution_number: number;
  set_solution_fully_opened: Setter<boolean>;
  set_solution_transition: Setter<number>;
  mount_solution_content: () => void;
  resetter: () => void;
};

const SolutionButton = (props: SolutionBtnProps) => {
  const { exercises_store: store, group_id } = useExercisesContext();
  const { updateExerciseByIndex } = useExercisesStateHelpers();
  const registry = useExerciseGroupRegistry();
  let buttonRef: HTMLDivElement | undefined;
  const solution_open = () =>
    store.exercises[props.solution_number - 1]?.solution_open;
  const transition_duration = () =>
    store.exercises[props.solution_number - 1]?.transition_duration;
  const transition_duration_with_safety_margin = () =>
    store.exercises[props.solution_number - 1]?.transition_duration + 50;
  const { set_handle, set_solution_fully_opened, set_solution_transition } =
    props;

  const preserveButtonPosition = (update: () => void) => {
    const topBefore = buttonRef?.getBoundingClientRect().top;
    update();

    const restoreButtonPosition = (remainingFrames: number) => {
      if (topBefore === undefined || !buttonRef) return;
      const topAfter = buttonRef.getBoundingClientRect().top;
      window.scrollBy(0, topAfter - topBefore);

      if (remainingFrames > 1) {
        requestAnimationFrame(() => restoreButtonPosition(remainingFrames - 1));
      }
    };

    requestAnimationFrame(() =>
      restoreButtonPosition(BATCH_SOLUTION_SCROLL_ANCHOR_FRAMES),
    );
  };

  const setAllSolutionsInChapter = (open: boolean) => {
    const article = location.pathname.split("/").pop();

    registry?.getAll().forEach(([registeredGroupId, entry]) => {
      entry.set_exercises_store("exercises", (exercises) =>
        exercises.map((exercise, index) => {
          localStorage.setItem(
            `${article}_${registeredGroupId}_exo_${index + 1}_opened`,
            String(open),
          );
          return {
            ...exercise,
            solution_open: open,
          };
        }),
      );
    });
  };

  return (
    <div
      ref={(el) => {
        buttonRef = el;
      }}
      class="relative"
      style={`padding-inline: ${SOLUTION_BUTTON_INLINE_PADDING}px`}
    >
      <SolutionSVG
        solution_open={solution_open}
        onPointerMove={(event) => {
          if (event.pointerType === "mouse") {
            props.mount_solution_content();
          }
        }}
        onClick={(event) => {
          event.stopPropagation();

          if (event.metaKey) {
            const open = !solution_open();
            preserveButtonPosition(() => setAllSolutionsInChapter(open));
            set_solution_fully_opened(open);
            set_solution_transition(0);
            return;
          }

          // *** track if solution is fully opened ***
          if (props.handle()) {
            clearTimeout(props.handle()!);
          }
          if (solution_open()) {
            set_solution_fully_opened(false);
          } else {
            let timeout_handle = setTimeout(() => {
              window.scrollBy(0, 0.1);
              set_solution_fully_opened(true);
            }, transition_duration_with_safety_margin());
            set_handle(timeout_handle);
          }

          // *** update transition duration ***
          set_solution_transition(transition_duration());

          // *** update main value ***
          updateExerciseByIndex(props.solution_number - 1, {
            field: "solution_open",
            value: !solution_open(),
          });

          props.resetter();
          setTimeout(props.resetter, 50);
          setTimeout(props.resetter, transition_duration());

          if (store.list_view) {
            // update localstorage for the solution . as useExercises hook only updates the selectedExo which works only in carousel view
            let article = location.pathname.split("/").pop();
            localStorage.setItem(
              `${article}_${group_id}_exo_${props.solution_number}_opened`,
              String(solution_open()),
            );
          }

          // *** solution transition should be not 0 only when button is clicked ***
          setTimeout(() => {
            set_solution_transition(0);
          }, transition_duration());
        }}
      />
    </div>
  );
};

type BackupArrowProps = {
  solution_open: Accessor<boolean>;
  solution_fully_opened: Accessor<boolean>;
  solution_transition: Accessor<number>;
  bot_div: Accessor<boolean>;
};

export const BackupArrow = (props: BackupArrowProps) => {
  let { store } = useGlobalContext();
  let { exercises_store, group_id } = useExercisesContext();

  const { solution_open, solution_fully_opened, solution_transition, bot_div } =
    props;

  let w = PREV_NEXT_EXERCISE_BUTTON_WIDTH;
  let rx = PREV_NEXT_EXERCISE_BUTTON_CORNER_RADIUS;

  const { calculateTargetCenterOnPage } = useScrollToInChapter();
  const selectedExercise = () => {
    const section = document.querySelector(
      `[data-exercise-group-id="${group_id}"]`,
    );
    return (section ?? document)
      .querySelectorAll(".exo-statement")
      .item(
        exercises_store.list_view ? 0 : exercises_store.selected_exo - 1,
      ) as HTMLElement;
  };

  let h = w;
  let triangle_sidelength = 11.5;
  let triangle_height = (triangle_sidelength * Math.sqrt(3)) / 2;
  let triangle_tip_to_edge = 8.5;
  let arrow_start_to_edge = 9;
  let arrow_body_width = 2;
  let arrow_body_length = 13;

  return (
    <div
      style={{
        "transition-duration": `${!store.animations ? 0 : solution_open() ? solution_transition() : 50}ms`,
      }}
      class={twJoin(
        "flex items-center justify-center",
        (!solution_open() || !solution_fully_opened()) && "opacity-0",
        bot_div() && "delay-[2s]",
      )}
    >
      <svg
        id="backup-btn"
        width={`${2 + w}`}
        height={`${2 + w}`}
        viewBox={`0 0 ${2 + w} ${2 + w}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="tab cursor-pointer z-10"
        onClick={() => {
          if (store.innerWidth > MOBILE_MAX_WIDTH) {
            smoothScrollTo(
              calculateTargetCenterOnPage(selectedExercise()) + 50,
              store.animations ? 100 : 0,
            );
          } else {
            document?.getElementById(`exo-${group_id}`)?.scrollIntoView();
          }
        }}
      >
        <path
          d={`M 1 ${1 + rx}A ${rx} ${rx} 0 0 1 ${1 + rx} ${1}H ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w} ${1 + rx}V ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w - rx} ${1 + w}H ${1 + rx}A ${rx} ${rx} 0 0 1 ${1} ${1 + w - rx}Z`}
          class="active_exercises_button"
        ></path>
        {/* could not compound these two into single path without getting evenodd
          fill-style, who knows why */}
        <path
          d={`M ${1 + w / 2 - arrow_body_width / 2} ${1 + h - arrow_start_to_edge} h ${arrow_body_width} v ${-arrow_body_length} h ${-arrow_body_width} z`}
          fill="black"
        ></path>
        <path
          d={`M ${1 + w / 2} ${1 + triangle_tip_to_edge} l ${triangle_sidelength * 0.5} ${triangle_height} h ${-triangle_sidelength} z`}
          fill="black"
        ></path>
      </svg>
    </div>
  );
};

type SolutionSVGProps = {
  onClick: (e: any) => void;
  onPointerMove: (event: PointerEvent) => void;
  solution_open: Accessor<boolean>;
};

export const SolutionSVG = (props: SolutionSVGProps) => {
  const { store: global_store } = useGlobalContext();
  return (
    <>
      <button
        type="button"
        aria-label="Toggle solution"
        onPointerMove={props.onPointerMove}
        onClick={props.onClick}
        class="cursor-pointer w-fit m-auto block"
      >
        <svg class="mx-auto h-[37px] overflow-visible">
          <g transform="translate(96,0)">
            <rect
              aria-label="solution_button_focus_rect"
              class="focus_alpha_fill"
              x="-7"
              y="-7"
              width="123"
              height="50"
            ></rect>
            <rect
              aria-label="solution_button_focus_rect"
              class={twJoin(
                global_store.animations ? "solution_button_transition" : "",
                props.solution_open()
                  ? "inactive_solution_button_rect"
                  : "active_solution_button_rect",
              )}
              width="109"
              height="36"
            ></rect>
            <path
              aria-label="solution_button_lip"
              class={twJoin(
                global_store.animations ? "solution_button_transition" : "",
                props.solution_open()
                  ? "inactive_solution_button_lip"
                  : "active_solution_button_lip",
              )}
              d="M 0 10 v -10 h 109 v 10 M 0 26 v 10 h 109 v -10"
            ></path>
            <g
              aria-label="solution_button_finger_pair"
              class={twJoin(
                global_store.animations ? "solution_button_transition" : "",
                props.solution_open()
                  ? "inactive_solution_button_hands"
                  : "active_solution_button_hands",
              )}
            >
              <use
                href="#finger_pointing_left"
                transform="translate(101.5, 18)"
              ></use>
              <use
                href="#finger_pointing_left"
                transform="scale(-1, 1) translate(-8, 20)"
              ></use>
              <use
                x="-2"
                href="#solution_button_text"
                style="pointer-events:none;"
              ></use>
            </g>
          </g>
        </svg>
      </button>
    </>
  );
};

export default Solution;
