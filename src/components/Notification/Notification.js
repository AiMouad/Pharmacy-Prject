import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = () => {
    const [lowStockMedicines, setLowStockMedicines] = useState(false);
    const [expiringSoonDrugs, setExpiringSoonDrugs] = useState(false);

    const handleLowStockButtonClick = () => {
        setLowStockMedicines(!lowStockMedicines);		
    };

    const handleExpiringSoonButtonClick = () => {
        setExpiringSoonDrugs(!expiringSoonDrugs);
    };

    useEffect(() => {
        // Example data
        const medicineStock = {
            MedicineA: 5,
            MedicineB: 3,
            MedicineC: 15,
        };

        const drugs = [
            { name: 'Drug X', validity: '2023-07-31' },
            { name: 'Drug Y', validity: '2023-08-15' },
            { name: 'Drug Z', validity: '2024-02-28' },
        ];

        const lowStockMedicinesFiltered = Object.entries(medicineStock).filter(([name, qty]) => qty < 10);
        const expiringSoonDrugsFiltered = drugs.filter(({ validity }) => new Date(validity) < new Date('2023-09-01'));

        setLowStockMedicines(lowStockMedicinesFiltered);
        setExpiringSoonDrugs(expiringSoonDrugsFiltered);
    }, []);

    return (
        <div className="notification-page">
            <div className="sidebar">This is the sidebar</div>
            <div className="Noti">
                    <button onClick={handleLowStockButtonClick}>Toggle Low Stock</button>
                    {lowStockMedicines && <div className={`low-stock ${lowStockMedicines ? '' : 'hide'}`}>
                    <p>Low Stock</p>
                    <ul>
                        {lowStockMedicines.map(([name, qty]) => (
                            <li key={name}>{`${name}: ${qty} left`}</li>
                        ))}
                    </ul>
                    <div className="animation" />
                </div>}

                    <button onClick={handleExpiringSoonButtonClick}>Toggle Expiring Soon</button>
                    {expiringSoonDrugs &&  <div className={`expiring-soon ${expiringSoonDrugs ? '' : 'hide'}`}>
                    <p>Expiring Soon</p>
                    <ul>
                        {expiringSoonDrugs.map(({ name, validity }) => (
                            <li key={name}>{`${name}: Valid until ${validity}`}</li>
                        ))}
                    </ul>
                    <div className="animation" />
                </div>}
            </div>
        </div>
    );
};

export default Notification;