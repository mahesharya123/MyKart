const mainReducer = (state = { items: [], totalAmount: 0 }, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_ITEM": {
          
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.item.id); // Fix payload structure

            if (index > -1) {
                items[index] = {
                    ...items[index],
                    quantity: items[index].quantity + 1
                };
            } else {
                items.push({
                    ...payload.item, // Fix payload reference
                    quantity: 1
                });
            }

            const totalAmount = state.totalAmount + payload.item.discountedprice; // Fix payload reference
            return {
                ...state,
                items: items,
                totalAmount: totalAmount
            };
        }

        case "REMOVE_ITEM": {
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.id);

            if (index === -1) return state; // Prevent invalid index access

            let totalAmount = state.totalAmount - items[index].discountedprice;

            if (items[index].quantity === 1) {
                items.splice(index, 1);
            } else {
                items[index] = {
                    ...items[index],
                    quantity: items[index].quantity - 1
                };
            }

            return {
                ...state,
                items: items,
                totalAmount: totalAmount
            };
        }

        case "CLEAR_CART": {
            return {
                items: [],
                totalAmount: 0
            };
        }

        default:
            return state;
    }
};

export default mainReducer;
