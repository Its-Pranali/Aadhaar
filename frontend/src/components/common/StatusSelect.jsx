

function StatusSelect({ name, value = "", onChange }) {

    const status = [
        { id: "1", name: "Active" },
        { id: "2", name: "Inactive" },
    ]
    return (
        <>
            <label htmlFor="status" className="form-label">Status</label>
            <select name={name} id="status" value={value} onChange={onChange} className="form-control">
                <option value="">Select Status</option>
                {status.map((status) => (
                    <option key={status.id} value={status.id}>
                        {status.name}
                    </option>
                ))}
            </select>
        </>
    );
}

export default StatusSelect;