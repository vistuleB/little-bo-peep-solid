import {
  Accessor,
  createEffect,
  createSignal,
  ParentProps,
  onCleanup,
  onMount,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import {
  GREEN_DIV_HEIGHT,
  MOBILE_MAX_WIDTH,
  TEXT_X_PADDING,
} from "~/constants";
import { twJoin } from "tailwind-merge";
import { Spacer, SpacerSm, SpacerXs, SpacerXXs } from "./Spacer";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  useExercisesContext,
  useExercisesStateHelpers,
} from "~/store/ExercisesStoreProvider";
import smoothScrollTo from "~/utils/smoothScrollTo";
import elementPosOnPage from "~/utils/elementPosOnPage";
import { HeightChangeListenerProvider } from "~/store/HeightChangeListenerProvider";

type SolutionProps = ParentProps &
  SharedProps & {
    solution_number: number;
    re_calculate_height?: boolean;
  };

const SpaceBetweenStatementAndSolutionButton = () => (
  <>
    <SpacerXs />
    <SpacerXXs />
  </>
);

const SpaceAfterSolutionButtonAlwaysShowing = () => (
  <>
    <SpacerSm />
    <SpacerXXs />
  </>
);

const ExtraSpaceBetweenSolutionButtonAndSolutionWhenSolutionShowing = () => (
  <>
    <SpacerSm />
    <SpacerXs />
  </>
);

const SpaceBeforeNextExerciseWhenNotLastExerciseInListViewAlwaysShowing =
  () => (
    <>
      <SpacerSm />
      <SpacerXs />
    </>
  );

const SpaceBeforeBackupArrow = () => (
  <>
    <Spacer />
  </>
);

export const Solution = (props: SolutionProps) => {
  let button_ref: HTMLDivElement | undefined;
  let ref: HTMLDivElement | undefined;
  let { store: global_store, set_store: set_global_store } = useGlobalContext();
  const { set_exercises_store: set_store, exercises_store: store } =
    useExercisesContext();
  const { updateExerciseByIndex } = useExercisesStateHelpers();

  const solution_open = () =>
    store.exercises[props.solution_number - 1]?.solution_open;
  let transition_duration = () =>
    store.exercises[props.solution_number - 1]?.transition_duration;

  let [content_height, set_content_height] = createSignal(0);
  let [bot_div, set_bot_div] = createSignal(false);
  let [solution_fully_opened, set_solution_fully_opened] = createSignal(false);
  let [handle, set_handle] = createSignal<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [green_div_transition, set_green_div_transition] = createSignal(0);
  const [solution_transition, set_solution_transition] = createSignal(0);
  const [green_div_height, set_green_div_height] =
    createSignal(GREEN_DIV_HEIGHT);

  const handleResize = () => {
    set_content_height(ref?.clientHeight || 0);
  };

  const reset_content_height_etc = () => {
    props.re_calculate_height; // re-calc on change
    if (ref?.clientHeight) {
      set_content_height(ref?.clientHeight || 0);
      updateExerciseByIndex(props.solution_number - 1, {
        field: "transition_duration",
        value: Math.min(ref?.clientHeight, 1000) * 0.8,
      });
    }
  };

  createEffect(() => {
    reset_content_height_etc();
    setTimeout(() => {
      reset_content_height_etc();
    }, 50);
    setTimeout(() => {
      reset_content_height_etc();
    }, 100);
    setTimeout(() => {
      reset_content_height_etc();
    }, 500);
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
    let exo = document
      .querySelectorAll(".exercise")
      ?.item(props.solution_number - 1);
    if (exo?.clientHeight < 200 + green_div_height()) {
      set_green_div_height(700);
    } else {
      set_green_div_height(GREEN_DIV_HEIGHT);
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
      <div
        ref={button_ref}
        class="relative"
        style={`padding-inline: ${TEXT_X_PADDING}`}>
        <SpaceBetweenStatementAndSolutionButton />
        <SolutionSVG
          solution_open={solution_open}
          onClick={() => {
            // *** track if solution is fully opened ***
            if (handle()) {
              clearTimeout(handle()!);
            }
            if (solution_open()) {
              set_solution_fully_opened(false);
            } else {
              let timeout_handle = setTimeout(() => {
                set_solution_fully_opened(true);
              }, transition_duration());
              set_handle(timeout_handle);
            }

            // *** update transition duration ***
            set_solution_transition(transition_duration());

            // *** scroll to button ***
            let element_pos =
              window.innerHeight - (ref?.getBoundingClientRect()?.bottom || 0);
            let should_scroll_to_button_first =
              element_pos > GREEN_DIV_HEIGHT + 40 + 56;
            if (solution_open() && should_scroll_to_button_first) {
              document?.getElementById("exo")?.scrollIntoView();
            }

            // *** update main value ***
            updateExerciseByIndex(props.solution_number - 1, {
              field: "solution_open",
              value: !solution_open(),
            });
            if (store.list_view) {
              // update localstorage for the solution . as useExercises hook only updates the selectedExo which works only in carousel view
              let article = location.pathname.split("/").pop();
              localStorage.setItem(
                `${article}_exo_${props.solution_number}_opened`,
                String(solution_open()),
              );
            }

            // *** solution transition should be not 0 only when button is clicked ***
            setTimeout(() => {
              set_solution_transition(0);
            }, transition_duration());
          }}
        />
        <SpaceAfterSolutionButtonAlwaysShowing />
      </div>
      <div
        class={twJoin(
          "solution relative transition-all",
          !solution_open() && "pointer-events-none",
          (!solution_open() || !solution_fully_opened()) && "overflow-y-clip",
        )}
        style={{
          height: `${solution_open() ? content_height() : 0}px`,
          "transition-duration": `${solution_transition()}ms`,
          "transition-property": "height",
        }}>
        <div
          ref={ref}
          class={twJoin(
            "transition-transform",
            !solution_open() && "-translate-y-full",
          )}
          style={{
            "transition-duration": `${solution_transition()}ms`,
          }}>
          <ExtraSpaceBetweenSolutionButtonAndSolutionWhenSolutionShowing />
          {props.children}
          {!store.list_view || props.solution_number === store.num_exercises ? (
            <>
              <SpaceBeforeBackupArrow />
              <div
                style={{
                  "transition-duration": `${solution_open() ? solution_transition() : 50}ms`,
                }}
                class={twJoin(
                  "flex items-center justify-center",
                  (!solution_open() || !solution_fully_opened()) && "opacity-0",
                  bot_div() && "delay-[2s]",
                )}>
                <BackupArrow />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {store.list_view && props.solution_number !== store.num_exercises ? (
        <>
          <SpaceBeforeNextExerciseWhenNotLastExerciseInListViewAlwaysShowing />
        </>
      ) : (
        <></>
      )}
      <div
        class="slice transition-all col-start-2"
        style={{
          height: `${(!store.list_view || props.solution_number === store.num_exercises) && (!solution_open() || bot_div()) ? green_div_height() : 0}px`,
          "background-color": global_store.show_areas ? "#00440050" : "",
          "transition-duration": `${green_div_transition()}ms`,
        }}></div>
    </HeightChangeListenerProvider>
  );
};

export const BackupArrow = () => {
  let { store } = useGlobalContext();
  return (
    <svg
      id="backup-btn"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="tab cursor-pointer z-10"
      onClick={() => {
        if (store.innerWidth > MOBILE_MAX_WIDTH) {
          let middleScroll =
            elementPosOnPage(document.getElementById("exercises-btns")) -
            window.innerHeight / 2 +
            50;
          smoothScrollTo(middleScroll, 100);
        } else {
          document?.getElementById("exo")?.scrollIntoView();
        }
      }}>
      <path
        d="M35.4941 1H6.65545C3.53203 1 1 3.53203 1 6.65545V35.4941C1 38.6175 3.53203 41.1495 6.65545 41.1495H35.4941C38.6175 41.1495 41.1495 38.6175 41.1495 35.4941V6.65545C41.1495 3.53203 38.6175 1 35.4941 1Z"
        fill="#EEFFAA"
        fill-opacity="0.4"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="2"></path>
      <path
        d="M20 32C20 32.5523 20.4477 33 21 33C21.5523 33 22 32.5523 22 32H20ZM21 11L15.2265 21H26.7735L21 11ZM22 32L22 20H20L20 32H22Z"
        fill="black"></path>
    </svg>
  );
};

type BtnProps = {
  onClick: () => void;
  solution_open: Accessor<boolean>;
};

export const SolutionSVG = (props: BtnProps) => {
  return (
    <>
      <div id="solution-btn" onClick={props.onClick} class="cursor-pointer">
        <svg class="mx-auto h-[37px] overflow-visible">
          <g class="solution_button_svg">
            <rect
              id="solution_button_focus_rect"
              class="focus_alpha_fill"
              x="-7"
              y="-7"
              width="123"
              height="50"></rect>

            <rect
              id="solution_button_focus_rect"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_rect"
                  : "active_solution_button_rect",
              )}
              width="109"
              height="36"></rect>

            <path
              id="solution_button_lip"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_lip"
                  : "active_solution_button_lip",
              )}
              d="M 0 10 v -10 h 109 v 10 M 0 26 v 10 h 109 v -10"></path>

            <g
              id="solution_button_finger_pair"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_hands"
                  : "active_solution_button_hands",
              )}>
              <g transform="translate(101.5, 18)">
                <use href="#finger_pointing_left"></use>
              </g>
              <g transform="scale(-1, 1) translate(-8, 20)">
                <use href="#finger_pointing_left"></use>
              </g>
              <use x="-2" href="#solution_button_text"></use>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Solution;
