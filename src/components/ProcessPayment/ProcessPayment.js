import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';
import SimpleCardForm from './SimpleCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie122BgoNPnJ9PsOBsvki1BkTcQVp6b39eTR7b3rvDMx3iYWAVreWIxJiXADDnILvmJPQ4Mn8YsN7HLm6H1aTcP00gLGZhD34');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
             <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
      </Elements>
    );
};

export default ProcessPayment;