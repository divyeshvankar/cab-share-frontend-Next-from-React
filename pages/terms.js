import React from 'react';
import styles from './TermsAndConditions.module.css'; // Import CSS module for styling


const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <h2>Terms and Conditions</h2>
      <ol>
        <li>
          <strong>Booking and Payment</strong>
          <ul>
            <li>
              Customers can book taxi rides by calling our customer service number or directly contacting drivers.
            </li>
            <li>
              Upon agreement of the fare with the driver over the phone, customers are required to pay an advance amount to confirm the booking.
            </li>
            <li>
              The remaining balance of the fare is to be paid in full at the end of the service.
            </li>
          </ul>
        </li>
        <li>
          <strong>Service Availability</strong>
          <ul>
            <li>
              While we strive to provide timely and reliable taxi services, availability may vary based on factors such as driver availability and demand.
            </li>
            <li>
              Customers are advised to book their rides in advance to ensure availability.
            </li>
          </ul>
        </li>
        <li>
          <strong>Pricing and Fare</strong>
          <ul>
            <li>
              The fare for taxi rides is determined based on various factors, including distance, time of day, and vehicle type.
            </li>
            <li>
              Customers must agree on the fare with the driver before confirming the booking and making any payments.
            </li>
          </ul>
        </li>
        <li>
          <strong>Cancellation and Refunds</strong>
          <ul>
            <li>
              In the event of a cancellation by the customer, the advance amount paid will be refunded as per our cancellation policy.
            </li>
            <li>
              Refunds may take a certain period to process, depending on the payment method used.
            </li>
          </ul>
        </li>
        <li>
          <strong>Customer Responsibilities</strong>
          <ul>
            <li>
              Customers are responsible for providing accurate pick-up and drop-off locations and any other relevant information to the driver.
            </li>
            <li>
              Customers must adhere to local traffic rules and regulations during the ride.
            </li>
          </ul>
        </li>
        <li>
          <strong>Driver Conduct</strong>
          <ul>
            <li>
              Our drivers are expected to provide courteous and professional service to customers at all times.
            </li>
            <li>
              Any misconduct or inappropriate behavior by drivers should be reported to our customer service team immediately.
            </li>
          </ul>
        </li>
        <li>
          <strong>Liability</strong>
          <ul>
            <li>
              While we take measures to ensure the safety and security of our customers, we are not liable for any loss, damage, or injury that may occur during the taxi ride.
            </li>
            <li>
              Customers are advised to take necessary precautions and secure their belongings during the ride.
            </li>
          </ul>
        </li>
        <li>
          <strong>Modification of Terms</strong>
          <ul>
            <li>
              We reserve the right to modify these terms and conditions at any time without prior notice. Any changes will be effective immediately upon posting on our website or notifying customers via other channels.
            </li>
          </ul>
        </li>
        <li>
          <strong>Governing Law</strong>
          <ul>
            <li>
              These terms and conditions are governed by the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of India.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default TermsAndConditions;
