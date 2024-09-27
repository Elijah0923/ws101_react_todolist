import './biodata.css';

function Biodata(props) {
    return (
        <div className='Biodata'>
            <h1>Activity #2: Biodata using ReactJS</h1>
            <h2>Name: Elijah Kristine A. Salazar</h2>
            <h2>Mobile: 09943990621</h2>
            <h2>Email: elijahkristinesalazar@gmail.com</h2>
            <h2>Gender: Female</h2>
            <h2>Birthday: September 23, 2000</h2>
            <h2>Father's Name: Deodelito Z. Salazar</h2>
            <h2>Mother's Name: Theresa Amor A. Salazar</h2>
            <h1>Education: </h1>
            <h2>High School: Quezon National High School</h2>
            <h2>College: Dalubhasaan ng Lungsod ng Lucena</h2>
            <h2>{props.name} {props.lastname}</h2>

        </div>
    )
}

export default Biodata