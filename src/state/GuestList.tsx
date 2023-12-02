import { useState } from 'react'

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);
    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    }


    const onClick2 = () => {
        setName('');
        setGuests([]);

    }


    // const onClick3 = () => {
    //     setName('');
    //     setGuests([...guests, name]);
    // }

    return <div>

        <h3>Guest List</h3>
        <ul>
            {guests.map((guest) => (
                <li key={guest}>{guest}
                    {/* <button onClick={onClick3}>
                        Clear Guest List
                    </button> */}
                </li>))}


        </ul>

        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>
            Add Guest
        </button>

        <button onClick={onClick2}>
            Clear Guest List
        </button>
    </div>;



};

export default GuestList;