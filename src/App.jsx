import style from "./App.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function App() {
  return (
    <>
      <Parallax
        pages={2}
        style={{ top: "0", left: "0" }}
        className={style.animation}
      >
        <ParallaxLayer offset={0} speed={0.25}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.backgroundImg}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.mountainImg}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.logo}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.forestOneLine}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.forestTwoLine}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.forestThreeLine}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.forestFourLine}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.foreground}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div
            className={`${style.animation_layer} ${style.parallax}`}
            id={style.forestFiveLine}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <div id={style.textblock}>
            <div id={style.textblockContainer}>
              <h1 id={style.textblockTitle}>What is Firewatch?</h1>
              <p id={style.textblockContent}>
                The year is 1989.
                <br />
                <br />
                You are a man named Henry who has retreated from your messy life
                to work as a fire lookout in the Wyoming wilderness. Perched
                atop a mountain, it's your job to find smoke and keep the
                wilderness safe.
                <br />
                <br />
                An especially hot, dry summer has everyone on edge. Your
                supervisor, a woman named Delilah, is available to youat all
                times over a small, handheld radio—and is your only contact with
                the world you've left behind.
                <br />
                <br />
                But when something strange draws you out of your lookout tower
                and into the world below, you'll explore a wild and unknown
                environment, facing questions and making interpersonal choices
                that can build or destroy the only meaningful relationship you
                have.
              </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
