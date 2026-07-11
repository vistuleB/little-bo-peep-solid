import { children, createUniqueId, For, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import Image from "./Image";
import { JSX } from "solid-js/h/jsx-runtime";
import { twJoin } from "tailwind-merge";
import useExercises from "~/hooks/useExercises";
import {
  closeAllSolutions,
  ExercisesStoreProvider,
  useExercisesContext,
  useExercisesStateHelpers,
  close_solutions_on_exiting_list_view,
  close_solutions_on_entering_list_view,
} from "~/store/ExercisesStoreProvider";
import { OneExerciseStoreProvider } from "~/store/OneExerciseStoreProvider";
import {
  PREV_NEXT_EXERCISE_BUTTON_CORNER_RADIUS,
  PREV_NEXT_EXERCISE_BUTTON_WIDTH,
} from "~/constants";

export type ExercisesMode = "list-only" | "switcher-only" | "dual";

type ExercisesProps = ParentProps &
  SharedProps & {
    at_end_of_page?: boolean;
    show_curlicue?: boolean;
    mode?: ExercisesMode;
  };

type ExerciseProps = ParentProps & {
  number: number;
};

export const Exercises = (props: ExercisesProps) => {
  const fallback_id = createUniqueId();
  const group_id = props.id ?? fallback_id;
  const at_end_of_page = props.at_end_of_page ?? false;
  const show_curlicue = props.show_curlicue ?? false;
  const mode: ExercisesMode = props.mode ?? "dual";
  let children_list = children(() => props.children);

  return (
    <ExercisesStoreProvider
      group_id={group_id}
      at_end_of_page={at_end_of_page}
      mode={mode}
    >
      {show_curlicue && (
        <Image
          id={`exo-${group_id}`}
          src="/non-build-img/separator.png"
          height="60px"
          class="mt-[15px] mb-[40px]"
        ></Image>
      )}
      {mode !== "list-only" && children_list.toArray().length > 1 && (
        <>
          <Switcher
            exercises={children_list.toArray()}
            group_id={group_id}
            show_toggle={mode === "dual"}
          />
          <div class="h-[31px]"></div>
        </>
      )}
      <ExercisesGroup {...props} />
    </ExercisesStoreProvider>
  );
};

type ExercisesGroupProps = ParentProps & SharedProps;

const ExercisesGroup = (props: ExercisesGroupProps) => {
  let children_list = children(() => props.children);
  let num_exercises = children_list.toArray().length;

  useExercises(num_exercises);

  const {
    set_exercises_store: set_store,
    exercises_store: store,
    group_id,
  } = useExercisesContext();
  const { initExercisesState } = useExercisesStateHelpers();

  let selected_exo = () => store.selected_exo;
  initExercisesState(num_exercises);

  if (selected_exo() > num_exercises) {
    set_store("selected_exo", num_exercises);
  } else if (selected_exo() < 1) {
    set_store("selected_exo", 1);
  }

  return (
    <section id={`exercises-${group_id}`} data-exercise-group-id={group_id}>
      <For each={children_list.toArray()}>
        {(child, index) => {
          return (
            <div
              class={twJoin(
                "exercise duration-500 ",
                selected_exo() == index() + 1 || store.list_view
                  ? "opacity-100 h-auto overflow-visible transition-none"
                  : "opacity-0 h-0 overflow-hidden transition-opacity",
              )}
            >
              {child}
            </div>
          );
        }}
      </For>
    </section>
  );
};

type SwitcherProps = {
  exercises: JSX.Element[];
  group_id: string;
  show_toggle: boolean;
};

const Switcher = (props: SwitcherProps) => {
  const { set_exercises_store: set_store, exercises_store: store } =
    useExercisesContext();
  let selected_exo = () => store.selected_exo;

  // gap between left/right buttons
  let gap = 8.5;

  let w = PREV_NEXT_EXERCISE_BUTTON_WIDTH;
  let rx = PREV_NEXT_EXERCISE_BUTTON_CORNER_RADIUS;

  // left/right arrow
  let triangle_sidelength = 11.5;
  let triangle_tip_to_edge = 7;
  let arrow_start_to_edge = 7.4;
  let arrow_body_width = 2;
  let arrow_body_length = 18;

  // gap between right button and toggle
  let toggle_gap = 26;

  // toggle
  let r1 = 8.5;
  let dr = 2.8;
  let r2 = r1 - dr;
  let c2c = (r1 * 15) / 9.5;

  let toggle_cx = () => {
    return store.list_view ? 1 + r1 : 1 + r1 + c2c;
  };

  const left_on = () => {
    return store.selected_exo > 1 && !store.list_view;
  };

  const right_on = () => {
    return store.selected_exo < props.exercises.length && !store.list_view;
  };

  const activateOnEnterOrSpace = (event: KeyboardEvent, action: () => void) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    event.stopPropagation();
    action();
  };

  const selectPrevious = () => {
    if (left_on()) set_store("selected_exo", selected_exo() - 1);
  };

  const selectNext = () => {
    if (right_on()) set_store("selected_exo", selected_exo() + 1);
  };

  const toggleListView = () => {
    const new_list_view = !store.list_view;
    set_store("list_view", new_list_view);
    if (store.list_view && close_solutions_on_entering_list_view)
      closeAllSolutions(set_store);
    if (!store.list_view && close_solutions_on_exiting_list_view)
      closeAllSolutions(set_store);
  };

  return (
    <div class="m-auto">
      <div
        id={`exercises-btns-${props.group_id}`}
        class="flex justify-center !text-xl gap-0 mt-[2px]"
      >
        <svg
          role="button"
          aria-label="Previous exercise"
          aria-disabled={!left_on()}
          tabIndex={left_on() ? 0 : -1}
          width={`${2 + w}`}
          height={`${2 + w}`}
          viewBox={`0 0 ${2 + w} ${2 + w}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class={twJoin(
            "tab cursor-pointer overflow-visible",
            left_on() ? "" : "disabled",
          )}
          onClick={(e) => {
            e.stopPropagation();
            selectPrevious();
          }}
          onKeyDown={(e) => activateOnEnterOrSpace(e, selectPrevious)}
        >
          <path
            class={twJoin(
              left_on()
                ? "active_exercises_button"
                : "inactive_exercises_button",
            )}
            d={`M 1 ${1 + rx}A ${rx} ${rx} 0 0 1 ${1 + rx} ${1}H ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w} ${1 + rx}V ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w - rx} ${1 + w}H ${1 + rx}A ${rx} ${rx} 0 0 1 ${1} ${1 + w - rx}Z`}
          ></path>
          <path
            class={twJoin(
              left_on()
                ? "active_exercises_button_arrow_fill"
                : "inactive_exercises_button_arrow_fill",
            )}
            d={`M ${1 + triangle_tip_to_edge} ${1 + w / 2} l ${(triangle_sidelength * Math.sqrt(3)) / 2} ${-0.5 * triangle_sidelength} v ${triangle_sidelength} z M ${1 + w - arrow_start_to_edge} ${1 + w / 2 - arrow_body_width / 2} v ${arrow_body_width} h ${-arrow_body_length} v ${-arrow_body_width} z`}
          ></path>
        </svg>
        <svg
          width={`${gap}`}
          height={`${2 + w}`}
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <div class="relative w-fit">
          <svg
            role="button"
            aria-label="Next exercise"
            aria-disabled={!right_on()}
            tabIndex={right_on() ? 0 : -1}
            width={`${2 + w}`}
            height={`${2 + w}`}
            viewBox={`0 0 ${2 + w} ${2 + w}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={twJoin(
              "tab cursor-pointer overflow-visible",
              right_on() ? "" : "disabled",
            )}
            onClick={(e) => {
              e.stopPropagation();
              selectNext();
            }}
            onKeyDown={(e) => activateOnEnterOrSpace(e, selectNext)}
          >
            <path
              class={twJoin(
                right_on()
                  ? "active_exercises_button"
                  : "inactive_exercises_button",
              )}
              d={`M 1 ${1 + rx}A ${rx} ${rx} 0 0 1 ${1 + rx} ${1}H ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w} ${1 + rx}V ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w - rx} ${1 + w}H ${1 + rx}A ${rx} ${rx} 0 0 1 ${1} ${1 + w - rx}Z`}
            ></path>
            <path
              class={twJoin(
                right_on()
                  ? "active_exercises_button_arrow_fill"
                  : "inactive_exercises_button_arrow_fill",
              )}
              d={`M ${1 + w - triangle_tip_to_edge} ${1 + w / 2} l ${(-triangle_sidelength * Math.sqrt(3)) / 2} ${-0.5 * triangle_sidelength} v ${triangle_sidelength} z`}
            ></path>
            <path
              class={twJoin(
                right_on()
                  ? "active_exercises_button_arrow_fill"
                  : "inactive_exercises_button_arrow_fill",
              )}
              d={`M ${1 + arrow_start_to_edge} ${1 + w / 2 - arrow_body_width / 2} v ${arrow_body_width} h ${arrow_body_length} v ${-arrow_body_width} z`}
            ></path>
          </svg>
          {props.show_toggle && (
            <svg
              role="button"
              aria-label="Toggle exercise list view"
              tabIndex={0}
              class={twJoin(
                "toggle absolute cursor-pointer",
                store.list_view ? "disabled" : "",
              )}
              style={`left:${w + toggle_gap}px;top:0px;`}
              width={`${c2c + 2 * r1 + 2}`}
              height={`${2 + w}`}
              viewBox={`0 0 ${c2c + 2 * r1 + 2} ${2 + w}`}
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => {
                e.stopPropagation();
                toggleListView();
              }}
              onKeyDown={(e) => activateOnEnterOrSpace(e, toggleListView)}
            >
              <path
                d={`
                M ${1 + r1 + c2c} ${w / 2 - r1}
                a ${r1} ${r1} 0 0 1 ${r1} ${r1}
                a ${r1} ${r1} 0 0 1 ${-r1} ${r1}
                h ${-c2c}
                a ${r1} ${r1} 0 0 1 ${-r1} ${-r1}
                a ${r1} ${r1} 0 0 1 ${r1} ${-r1}
                z
              `}
                class={twJoin(
                  store.list_view
                    ? "inactive_exercises_button"
                    : "active_exercises_button_toggle",
                )}
              ></path>
              <circle
                cx={`${toggle_cx()}`}
                cy={`${w / 2}`}
                r={`${r2}`}
                class={twJoin(
                  store.list_view
                    ? "inactive_exercises_toggle_circle"
                    : "active_exercises_toggle_circle",
                )}
              ></circle>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export const Exercise = (props: ExerciseProps) => {
  return (
    <OneExerciseStoreProvider number={props.number}>
      <div>{props.children}</div>
    </OneExerciseStoreProvider>
  );
};

export const ExerciseStatement = (props: any) => {
  let { children, ...rest } = props;
  return (
    <div class="exo-statement" {...rest}>
      {children}
    </div>
  );
};
