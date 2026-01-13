

function DistrictSelect({ name,value="", onChange }) {
    const districts = [
        { id: "1", name: "Ahmednagar" },
        { id: "2", name: "Akola" },
        { id: "3", name: "Amravati" },
        { id: "4", name: "Aurangabad" },
        { id: "5", name: "Beed" },
        { id: "6", name: "Bhandara" },
        { id: "7", name: "Buldhana" },
        { id: "8", name: "Chandrapur" },
        { id: "9", name: "Dhule" },
        { id: "10", name: "Gadchiroli" },
        { id: "11", name: "Gondia" },
        { id: "12", name: "Hingoli" },
        { id: "13", name: "Jalgaon" },
        { id: "14", name: "Jalna" },
        { id: "15", name: "Kolhapur" },
        { id: "16", name: "Latur" },
        { id: "17", name: "Mumbai City" },
        { id: "18", name: "Mumbai Suburban" },
        { id: "19", name: "Nagpur" },
        { id: "20", name: "Nanded" },
        { id: "21", name: "Nandurbar" },
        { id: "22", name: "Nashik" },
        { id: "23", name: "Osmanabad" },
        { id: "24", name: "Palghar" },
        { id: "25", name: "Parbhani" },
        { id: "26", name: "Pune" },
        { id: "27", name: "Raigad" },
        { id: "28", name: "Ratnagiri" },
        { id: "29", name: "Sangli" },
        { id: "30", name: "Satara" },
        { id: "31", name: "Sindhugurg" },
        { id: "32", name: "Solapur" },
        { id: "33", name: "Thane" },
        { id: "34", name: "Wardha" },
        { id: "35", name: "Washim" },
        { id: "36", name: "Yavatmal" },
    ];
    return (
        <>
            <label className="form-label">Select District</label>
            <select className="form-control" name={name} value={value} onChange={onChange} >
                <option value="">Select District</option>
                {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                        {district.name}
                    </option>
                ))}
            </select>
        </>
    );
}

export default DistrictSelect;