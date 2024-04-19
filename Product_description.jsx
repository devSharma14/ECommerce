// import React, { useState } from 'react';
// import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { useGlobalContext } from '../../context/globalContext';
// import Button from '../Button/Button';
// import { plus } from '../../utils/Icons';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function LimitForm() {
//     const { addLimit, addPayment, error, setError } = useGlobalContext();
//     const [inputState, setInputState] = useState({
//         date: new Date(),
//         amount: '',
//         upiId: '',
//         paymentAmount: ''
//     });
//     const [showPaymentForm, setShowPaymentForm] = useState(false);

//     const { date, amount, upiId, paymentAmount } = inputState;

//     const handleInput = name => e => {
//         setInputState({ ...inputState, [name]: e.target.value });
//         setError('');
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (showPaymentForm) {
//             // Handle payment submission
//             addPayment(inputState);
//         } else {
//             // Handle adding a limit
//             addLimit(inputState);
//         }
//         notify();
//         setInputState({
//             date: new Date(),
//             amount: '',
//             upiId: '',
//             paymentAmount: ''
//         });
//     }

//     const handleOpenPaymentForm = () => {
//         setShowPaymentForm(true);
//     }

//     const notify = () => toast.success("Operation Successful");

//     return (
//         <LimitFormStyled onSubmit={handleSubmit}>
//             {error && <p className='error'>{error}</p>}
//             <div className="input-control">
//                 <DatePicker
//                     id='date'
//                     placeholderText='Enter A Date'
//                     selected={date}
//                     dateFormat="dd/MM/yyyy"
//                     onChange={(date) => setInputState({ ...inputState, date: date })}
//                 />
//             </div>
//             <div className="input-control">
//                 <input value={amount}
//                     type="text"
//                     name={'amount'}
//                     placeholder={'Add Limit'}
//                     onChange={handleInput('amount')}
//                 />
//             </div>
//             {showPaymentForm && (
//                 <>
//                     <div className="input-control">
//                         <input value={upiId}
//                             type="text"
//                             name={'upiId'}
//                             placeholder={'UPI ID or Number'}
//                             onChange={handleInput('upiId')}
//                         />
//                     </div>
//                     <div className="input-control">
//                         <input value={paymentAmount}
//                             type="text"
//                             name={'paymentAmount'}
//                             placeholder={'Amount to Pay'}
//                             onChange={handleInput('paymentAmount')}
//                         />
//                     </div>
//                 </>
//             )}
//             <div className="submit-btn">
//                 <Button
//                     onClick={handleSubmit} // Submit the form when the button is clicked
//                     name={'Add Limit'}
//                     icon={plus}
//                     bPad={'.8rem 1.6rem'}
//                     bRad={'30px'}
//                     bg={'var(--color-accent)'}
//                     color={'#fff'}
//                 />
//                 <Button
//                     onClick={handleOpenPaymentForm} // Open the payment form when the button is clicked
//                     name={'Pay?'}
//                     icon={plus}
//                     bPad={'.8rem 1.6rem'}
//                     bRad={'30px'}
//                     bg={'var(--color-accent)'}
//                     color={'#fff'}
//                 />
//                 <ToastContainer />
//             </div>
//         </LimitFormStyled>
//     )
// }


// const LimitFormStyled = styled.form`
//     margin-top:20px;
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     input, textarea, select{
//         font-family: inherit;
//         font-size: inherit;
//         outline: none;
//         border: none;
//         padding: .5rem 1rem;
//         border-radius: 5px;
//         border: 2px solid #fff;
//         background: transparent;
//         resize: none;
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         color: rgba(34, 34, 96, 0.9);
//         &::placeholder{
//             color: rgba(34, 34, 96, 0.4);
//         }
//     }
//     .input-control{
//         input{
//             width: 100%;
//         }
//     }

//     .selects{
//         display: flex;
//         justify-content: flex-end;
//         select{
//             color: rgba(34, 34, 96, 0.4);
//             &:focus, &:active{
//                 color: rgba(34, 34, 96, 1);
//             }
//         }
//     }

//     .submit-btn{
//         button{
//             box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//             &:hover{
//                 background: var(--color-green) !important;
//             }
//         }
//     }
// `;
// export default LimitForm