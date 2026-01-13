

function AgenciesSelect({name, value="", onChange }) {
    const agencies = [
        { id: "1", name: "Women & Child Development Department" },
        { id: "2", name: "School & Education Department" },
    ];
    return (
        <>
            <label className="form-label">Select Agency</label>
            <select className="form-control" name={name} value={value} onChange={onChange}>
                <option value="">Select Agency</option>
                {agencies.map((agency) => (
                    <option key={agency.id} value={agency.id}>
                        {agency.name}
                    </option>
                ))}
            </select>
        </>
    );
}

export default AgenciesSelect;