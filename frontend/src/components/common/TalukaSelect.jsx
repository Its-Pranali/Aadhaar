

function TalukaSelect({ districtId, value, onChange, name }) {
    const talukas = [
        { id: "1", district_id: "1", name: "Akola" },
        { id: "2", district_id: "1", name: "Jamkhed" },
        { id: "3", district_id: "1", name: "Karjat" },
        { id: "4", district_id: "1", name: "Kopergaon" },
        { id: "5", district_id: "1", name: "Nagar" },
        { id: "6", district_id: "1", name: "Nevasa" },
        { id: "7", district_id: "1", name: "Parner" },
        { id: "8", district_id: "1", name: "Pathardi" },
        { id: "9", district_id: "1", name: "Ratha" },
        { id: "10", district_id: "1", name: "Rahuri" },
        { id: "11", district_id: "1", name: "Sangamner" },
        { id: "12", district_id: "1", name: "Shevgaon" },
        { id: "13", district_id: "1", name: "Shrigonda" },
        { id: "14", district_id: "1", name: "Shrirampur" },

        { id: "15", district_id: "2", name: "Akola" },
        { id: "16", district_id: "2", name: "Akot" },
        { id: "17", district_id: "2", name: "Balapur" },
        { id: "18", district_id: "2", name: "Barshitakli" },
        { id: "19", district_id: "2", name: "Murtijapur" },
        { id: "20", district_id: "2", name: "Patur" },
        { id: "21", district_id: "2", name: "Telhara" },

        { id: "22", district_id: "3", name: "Achalpur" },
        { id: "23", district_id: "3", name: "Amravati" },
        { id: "24", district_id: "3", name: "Anjangaon Surji" },
        { id: "25", district_id: "3", name: "Bhatkuli" },
        { id: "26", district_id: "3", name: "Chandur Railway" },
        { id: "27", district_id: "3", name: "Chandurbazar" },
        { id: "28", district_id: "3", name: "Chikhaldara" },
        { id: "29", district_id: "3", name: "Daryapur" },
        { id: "30", district_id: "3", name: "Dhamangaon Railway" },
        { id: "31", district_id: "3", name: "Dharni" },
        { id: "32", district_id: "3", name: "Morshi" },
        { id: "33", district_id: "3", name: "Nandgaon-Khendeshwar" },
        { id: "34", district_id: "3", name: "Teosa" },
        { id: "35", district_id: "3", name: "Warud" },

        { id: "36", district_id: "4", name: "Aurangabad" },
        { id: "37", district_id: "4", name: "Gangapur" },
        { id: "38", district_id: "4", name: "Kannad" },
        { id: "39", district_id: "4", name: "Khuldabad" },
        { id: "40", district_id: "4", name: "Paithan" },
        { id: "41", district_id: "4", name: "Phulambri" },
        { id: "42", district_id: "4", name: "Sillod" },
        { id: "43", district_id: "4", name: "Soegaon" },
        { id: "44", district_id: "4", name: "Vaijapur" },

        { id: "45", district_id: "5", name: "Ambejogai" },
        { id: "46", district_id: "5", name: "Ashti" },
        { id: "47", district_id: "5", name: "Bid" },
        { id: "48", district_id: "5", name: "Dharur" },
        { id: "49", district_id: "5", name: "Georai" },
        { id: "50", district_id: "5", name: "Kaij" },
        { id: "51", district_id: "5", name: "Manjlegaon" },
        { id: "52", district_id: "5", name: "Parli" },
        { id: "52", district_id: "5", name: "Patoda" },
        { id: "54", district_id: "5", name: "Shirur (Kasar)" },
        { id: "55", district_id: "5", name: "Wadwani" },

        { id: "56", district_id: "6", name: "Bhandara" },
        { id: "57", district_id: "6", name: "Lakhandur" },
        { id: "58", district_id: "6", name: "Lakhani" },
        { id: "59", district_id: "6", name: "Mohadi" },
        { id: "60", district_id: "6", name: "Pauni" },
        { id: "61", district_id: "6", name: "Sakoli" },
        { id: "62", district_id: "6", name: "Tumsar" },

        { id: "63", district_id: "7", name: "Buldhana" },
        { id: "64", district_id: "7", name: "Chikhli" },
        { id: "65", district_id: "7", name: "Deolgaon Raja" },
        { id: "66", district_id: "7", name: "Jalgaon (Jamod)" },
        { id: "67", district_id: "7", name: "Khamgaon" },
        { id: "68", district_id: "7", name: "Lonar" },
        { id: "69", district_id: "7", name: "Malkapur" },
        { id: "70", district_id: "7", name: "Mehkar" },
        { id: "71", district_id: "7", name: "Motala" },
        { id: "72", district_id: "7", name: "Nandura" },
        { id: "73", district_id: "7", name: "Sangrampur" },
        { id: "74", district_id: "7", name: "Shegaon" },
        { id: "75", district_id: "7", name: "Sindkhed Raja" },


        { id: "", district_id: "29", name: "Atpadi" },
        { id: "20", district_id: "29", name: "Jat" },
        { id: "21", district_id: "29", name: "Kadegaon" },
        { id: "22", district_id: "29", name: "Miraj" },
        { id: "23", district_id: "29", name: "Palus" },
        { id: "24", district_id: "29", name: "Shirala" },
        { id: "25", district_id: "29", name: "Tasgaon" },
        { id: "26", district_id: "29", name: "Walwa" },
        { id: "27", district_id: "30", name: "Jaoli" },
        { id: "28", district_id: "30", name: "Karad" },
        { id: "29", district_id: "30", name: "Khandala" },
        { id: "30", district_id: "30", name: "Khatav" },
        { id: "31", district_id: "30", name: "Koregaon" },
    ];

    const filteredTalukas = talukas.filter(
        (t) => t.district_id === districtId
    );
    return (
        <>
            <label className="form-label">Select Taluka</label>
            <select className="form-control" name={name} value={value} onChange={onChange} disabled={!districtId} >
                <option value="">Select Taluka</option>
                {filteredTalukas.map((taluka) => (
                    <option key={taluka.id} value={taluka.id}>
                        {taluka.name}
                    </option>
                ))}
            </select>
        </>
    );
}

export default TalukaSelect;