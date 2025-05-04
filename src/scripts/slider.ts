interface ISliderOptions {
  autoVHConvertion?: boolean;
  slideShift?: number;
  wheelSensitivityMultiplier?: number;
}

export function initSlider(name: string, options?: ISliderOptions) {
  const sliderComponent = document.querySelector<HTMLDivElement>(
    `[data-slider="${name}"]`
  );

  if (!sliderComponent) return;

  const {
    autoVHConvertion = true,
    slideShift = 250,
    wheelSensitivityMultiplier = 5,
  } = options || {};
  const sliderTrack = sliderComponent.querySelector("[data-slider-track]");
  const buttonBackward = sliderComponent.querySelector(
    "[data-button-backward]"
  );
  const buttonForward = sliderComponent.querySelector("[data-button-forward]");

  if (sliderTrack) {
    if (autoVHConvertion) {
      // @ts-ignore
      sliderTrack.addEventListener("wheel", trackWheelHandler(sliderTrack));
    }
    if (buttonBackward && buttonForward) {
      buttonBackward.addEventListener(
        "click",
        clickHandler(sliderTrack, { backward: true })
      );
      buttonForward.addEventListener("click", clickHandler(sliderTrack));
    }
  }

  function trackWheelHandler(track: Element) {
    return function (e: WheelEvent) {
      e.preventDefault();
      forceVtoHscroll(track, { deltaX: e.deltaX, deltaY: e.deltaY });
    };
  }

  function clickHandler(
    track: Element,
    options?: { backward?: boolean; shift?: number }
  ) {
    const { backward = false, shift = slideShift } = options || {};
    return function (_: Event) {
      if (backward) {
        track.scrollLeft -= shift;
      } else {
        track.scrollLeft += shift;
      }
    };
  }

  function forceVtoHscroll(
    element: Element,
    options: { multiplier?: number; deltaX: number; deltaY: number }
  ) {
    const {
      multiplier = wheelSensitivityMultiplier,
      deltaX,
      deltaY,
    } = options || {};
    element.scrollLeft += multiplier * deltaY + deltaX;
  }
}
