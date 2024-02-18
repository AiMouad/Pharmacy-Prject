import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = () => {
    const [lowStockMedicines, setLowStockMedicines] = useState([]);
    const [expiringSoonDrugs, setExpiringSoonDrugs] = useState([]);

    const [showLowStockDescription, setShowLowStockDescription] = useState(false);
    const [showExpiringSoonDescription, setShowExpiringSoonDescription] = useState(false);

    const Edit = () => {
        window.location.href = "https://10015.io/tools/css-gradient-generator";
    };

    useEffect(() => {
        // Example data
        const medicineStock = {
            MedicineA: 5,
            MedicineB: 30,
            MedicineC: 1,
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

    const toggleLowStockDescription = () => {
        setShowLowStockDescription(prevState => !prevState);
    };

    const toggleExpiringSoonDescription = () => {
        setShowExpiringSoonDescription(prevState => !prevState);
    };

    return (
        <div className="notification-page">
            <div className="sidebar">This is the sidebar</div>
            <div className="Noti">
                <div className='up'>
                Notification
                </div>
                <div className='down'>
                <div className='info'>
                    <p></p>
                <button class="fancy" onClick={toggleLowStockDescription}>
                    {showLowStockDescription ? 'Hide Low Stock Description' : 'Show Low Stock Description'}
                </button>
                {showLowStockDescription && lowStockMedicines.length > 0 && (
                    <div id={"font"} className={`low-stock ${lowStockMedicines ? '' : 'hide'}`}>                     

                        <ul>                         
                            {lowStockMedicines.map(([name, qty]) => (                             
                            <div class="card">
                            <div class="header">
                                <div class="image"><svg aria-hidden="true" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke-linejoin="round" stroke-linecap="round"></path>
                                        </svg></div>
                                <div class="content">
                                <span class="title">{`${name}`}</span>
                                <p class="message">La quantité restante: {`${qty}`} </p>
                                </div>
                                <div class="actions">
                                <button className="Edit" onClick={Edit}>Edit</button>
                                </div>
                            </div>
                            </div>                         
                            ))}                     
                        </ul>                     
                        <div className="animation" />                 
                    </div>
                )}
                </div>
                
                <div className='info'>
                <p></p>
                <button class="fancy" onClick={toggleExpiringSoonDescription}>
                    {showExpiringSoonDescription ? 'Hide Expiring Soon Description' : 'Show Expiring Soon Description'}
                </button>
                {showExpiringSoonDescription && expiringSoonDrugs.length > 0 && (
                    <div id={"font"} className={`expiring-soon ${expiringSoonDrugs ? '' : 'hide'}`}>                     
                        <ul>                         
                            {expiringSoonDrugs.map(({ name, validity }) => (                             
                            <div class="card">
                            <div class="header">
                                <div class="image"><svg aria-hidden="true" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke-linejoin="round" stroke-linecap="round"></path>
                                        </svg></div>
                                <div class="content">
                                <span class="title">{`${name}`}</span>
                                <p class="message">Date de violation de validité: {`${validity}`} </p>
                                </div>
                                <div class="actions">
                                <button className="Edit" onClick={Edit}>Edit</button>
                                </div>
                            </div>
                            </div>                       
                            ))}                     
                        </ul>                     
                        <div className="animation" />                 
                    </div>
                )}
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Notification;
