import { useState } from "react"

const Home = () => {
    const [visible, setvisible] = useState(true)
    const [color, setColor] = useState('')

    const handleMulti = () => {
        setInterval(() => {
            setColor((prevColor) => (prevColor === '' ? 'green' : ''));
        }, 2000);
    }
    return (
        <>
            <div className="btn-group">
                <button style={{ marginLeft: '12px' }} onClick={() => setvisible(visible => !visible)}>Toggle</button>
                <button style={{ marginLeft: '12px' }} onClick={() => setColor(green=> !green)}>Color</button>
                <button style={{ marginLeft: '12px' }} onClick={handleMulti}>Auto</button>
            </div>
            <div className="text" id="text" style={{textDecorationStyle: 'double', marginTop: '20px', fontSize: '30px', fontWeight: 'bold', display: visible ? 'block' : 'none', color: color ? 'lightgreen' : 'blue', backgroundColor: '#f0e68c'}}>
                <table >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores eos,
                        accusamus optio facere eveniet voluptates vero explicabo hic neque
                        fugit sed laudantium deserunt repudiandae id sunt. Libero, nihil autem.</p>
                </table>
            </div>
        </>
    )
}

export default Home