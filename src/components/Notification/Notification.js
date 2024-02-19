import React, { useEffect, useState } from 'react';
import './Notification.css'

const Notification = () => {
  const [lowStockMedicines, setLowStockMedicines] = useState([]);
  const [expiringSoonDrugs, setExpiringSoonDrugs] = useState([]);

 
  const Edit = () => {
    window.location.href = "";
  };

  const isExpiringSoon = (validity) => {
    const targetDate = new Date();
    targetDate.setHours(0, 0, 0, 0); // Set the hours, minutes, seconds, and milliseconds to 0
    const medicineDate = new Date(validity);
    const diffInTime = medicineDate.getTime() - targetDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays <= 10;
  }

  useEffect(() => {
    // Example data
    const medicineStock = {
      MedicineA: 5,
      MedicineB: 30,
      MedicineC: 1,
    };

    const drugs = [
      { name: 'Drug X', validity: '2025-07-31' },
      { name: 'Drug Y', validity: '2024-03-01' },
      { name: 'Drug Z', validity: '202-02-30' },
    ];

    const lowStockMedicinesFiltered = Object.entries(medicineStock).filter(([name, qty]) => qty < 10);
    const expiringSoonDrugsFiltered = drugs.filter(({ validity }) => isExpiringSoon(validity));

    setLowStockMedicines(lowStockMedicinesFiltered);
    setExpiringSoonDrugs(expiringSoonDrugsFiltered);
  }, []);

  return (
    <div className="notification-page">
      <div className="sidebar">This is the sidebar</div>
      <div className="Noti">
        <div className='up'>
          <button className="But">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
              <path fill-rule="evenodd" fill="#7D8590" d="m11.9572 4.31201c-3.35401 0-6.00906 2.59741-6.00906 5.67742v3.29037c0 .1986-.05916.3927-.16992.5576l-1.62529 2.4193-.01077.0157c-.18701.2673-.16653.5113-.07001.6868.10031.1825.31959.3528.67282.3528h14.52603c.2546 0 .5013-.1515.6391-.3968.1315-.2343.1117-.4475-.0118-.6093-.0065-.0085-.0129-.0171-.0191-.0258l-1.7269-2.4194c-.121-.1695-.186-.3726-.186-.5809v-3.29037c0-1.54561-.6851-3.023-1.7072-4.00431-1.1617-1.01594-2.6545-1.67311-4.3019-1.67311zm-8.00906 5.67742c0-4.27483 3.64294-7.67742 8.00906-7.67742 2.2055 0 4.1606.88547 5.6378 2.18455.01.00877.0198.01774.0294.02691 1.408 1.34136 2.3419 3.34131 2.3419 5.46596v2.97007l1.5325 2.1471c.6775.8999.6054 1.9859.1552 2.7877-.4464.795-1.3171 1.4177-2.383 1.4177h-14.52603c-2.16218 0-3.55087-2.302-2.24739-4.1777l1.45056-2.1593zm4.05187 11.32257c0-.5523.44772-1 1-1h5.99999c.5523 0 1 .4477 1 1s-.4477 1-1 1h-5.99999c-.55228 0-1-.4477-1-1z" clip-rule="evenodd"></path>
            </svg>
            <span className="notifications-count">5</span>
          </button>
          Notification
        </div>
        <div className='down'>
          <div className='info'>
            <div id={"font"} className={`low-stock ${lowStockMedicines ? '' : 'hide'}`}>
              <ul>
                {lowStockMedicines.map(([name, qty]) => (

                  <div className="card">
                    <div className="header">
                      <div className="image">
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                          <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <span className="title">{`${name}`}</span>
                        <div  className="message">
                        <span>La quantité restante: {`${qty}`} </span>
                        </div>
                      </div>
                      <div className="actions">
                        <button className="Edit" onClick={Edit}>Edit</button>
                      </div>
                    </div>
                  </div>

                ))}
              </ul>
            </div>

            <div id={"font"} className={`expiring-soon ${expiringSoonDrugs ? '' : 'hide'}`}>
              <ul>
                {expiringSoonDrugs.map(({ name, validity }) => (
                  <div className="card">
                    <div className="header">
                      <div className="image">
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                          <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <span className="title">{`${name}`}</span>
                        <p className="message">Date de violation de validité: {`${validity}`} </p>
                      </div>
                      <div className="actions">
                        <button className="Edit" onClick={Edit}>Edit</button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
