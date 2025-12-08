import { useEffect, useState } from 'react';
function FormInfo() {
    const [formData, setFormData] = useState('')

    useEffect(() => {
        alert(formData)
    });

    return (
        <form>
            <input type="text" name="username" onChange={(e) => setFormData(e.target.value)} />
        </form>
    );
}

export default FormInfo;