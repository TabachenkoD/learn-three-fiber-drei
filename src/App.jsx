import {
  ScrollControls,
  Scroll,
  Environment,
  Sparkles,
  Backdrop,
  Float,
  Ring,
} from "@react-three/drei";
import { Robot } from "./assets/model/robot/Robot";
/* import { baffle } from "baffle"; */
import { useEffect } from "react";
import "./App.scss";

const App = () => {
 /*  useEffect(() => {
    const target = baffle(".title");
    target.set({
      characters: "░P░H░A░N░T░O░M░",
      speed: 100,
    });
    target.start();
    target.reveal(1000, 1000);
  });
 */
  return (
    <>
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />

      <ScrollControls
        pages={6} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={0.1} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} // Can also scroll infinitely (default: false)
      >
        <Robot scale={0.03} position={[0, -3, 0]} />
        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]} />

        <Backdrop
          receiveShadow
          floor={20.5}
          segments={100}
          scale={[50, 30, 10]}
          position={[4, -10, -1]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Ring
            scale={3.5}
            position-z={-3}
            position-y={-1}
            args={[0, 0.95, 60]}
            receiveShadow
          >
            <meshStandardMaterial color="#2a3a3f" />
          </Ring>
        </Float>

        <Scroll></Scroll>

        <Scroll html style={{ width: "100%" }}>
          <h1
            className="title"
            style={{
              color: "#cdcbca",
              position: "absolute",
              top: `65vh`,
              left: "50%",
              fontSize: "13em",
              transform: `translate(-50%,-50%)`,
            }}
          >
            PHANTOM
          </h1>

          <div className="row" style={{ position: "absolute", top: `132vh` }}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: "400px" }}>
              Featuring a sleek, metallic design inspired by advanced
              technology, this aftershave bottle is as stylish as it is
              functional. But it's not just a pretty face - inside, you'll find
              a nourishing and protective aftershave formula that will leave
              your skin feeling refreshed and hydrated.
            </p>
            <button>Read more</button>
          </div>

          <div className="row" style={{ position: "absolute", top: `230vh` }}>
            <div
              className="col"
              style={{ position: "absolute", right: `40px`, width: "540px" }}
            >
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: "440px" }}>
                Featuring a sleek, metallic design inspired by advanced
                technology, this aftershave bottle is as stylish as it is
                functional. But it's not just a pretty face - inside, you'll
                find a nourishing and protective aftershave formula that will
                leave your skin feeling refreshed and hydrated.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <h2
            style={{
              position: "absolute",
              top: "350vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Cutting-Edge of Grooming
          </h2>

          <button
            style={{
              position: "absolute",
              top: `580vh`,
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Buy now
          </button>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default App;
