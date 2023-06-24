
import { Html, useProgress } from "@react-three/drei";


const CanvasLoader = ({ setSpean }) => {
    const { progress } = useProgress();
    if (progress === 100) {
        setSpean(false)
    }

    return (
        <Html
            as='div'
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: 200,
            }}
        >
            <span className='canvas-loader'></span>
            <p
                style={{
                    fontSize: 16,
                    color: "#F1F1F1",
                    fontWeight: 400,
                    marginTop: 40,
                }}
            >
                Loaded  <span className="text-primary font-bold">{progress.toFixed(2)}</span> %
            </p>
        </Html>
    );
};

export default CanvasLoader;