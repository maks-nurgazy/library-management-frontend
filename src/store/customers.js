import {apiCallBegan} from "./api";
import {CUSTOMER_URL} from './constants'
const {createSlice} = require("@reduxjs/toolkit");

const slice = createSlice({
    name: 'customers',
    initialState: {
        loading: false,
        list: []
    },
    reducers: {
        customersRequested: (state, action) => {
            state.loading = true
        },
        customersRequestFailed: (state, action) => {
            state.loading = false
        },
        customerListReceived: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },
        customerAdded: (state, action) => {
            state.list.push(action.payload);
            state.loading = false;
        },
        customerUpdated: (state, action) => {
            const index = state.list.findIndex(customer => customer.id === action.payload.id);
            state.list[index] = action.payload;
            state.loading = false;
        },
        customerDeleted: (state, action) => {
            state.list = state.list.filter(customer => customer.id !== action.payload.id)
        }
    }
});


const {
    customersRequested,
    customersRequestFailed,
    customerListReceived,
    customerAdded,
    customerUpdated,
    customerDeleted
} = slice.actions;

export default slice.reducer;

export const loadCustomers = () => apiCallBegan({
    url: CUSTOMER_URL,
    onStart: customersRequested.type,
    onSuccess: customerListReceived.type,
    onError: customersRequestFailed.type
});

export const addCustomer = (customer) => apiCallBegan({
    url: CUSTOMER_URL,
    method: 'post',
    data: customer,
    onStart: customersRequested.type,
    onSuccess: customerAdded.type
});

export const updateCustomer = (id, data) => apiCallBegan({
    url: `${CUSTOMER_URL}${id}/`,
    method: 'patch',
    data: data,
    onStart: customersRequested.type,
    onSuccess: customerUpdated.type
});

export const deleteCustomer = (id) => apiCallBegan({
    url: `${CUSTOMER_URL}${id}/`,
    method: 'delete',
    onStart: customersRequested.type,
    onSuccess: customerDeleted.type,
    onError: customersRequestFailed.type,
});