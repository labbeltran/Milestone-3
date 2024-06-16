import { doc, writeBatch} from "firebase/firestore";
import { auth, firestore } from './config';

type CartItem = {
    id: string;
    quantity: number;
    price: number;
}

export const updateFirestoreCart = async (cartItems: CartItem[]): Promise<void> => {
    const user = auth.currentUser;
    if (user) {
        const batch = writeBatch(firestore);
        cartItems.forEach(item => {
            const itemRef = doc(firestore, 'users', user.uid, 'cart', item.id);
            if (item.quantity === 0) {
                batch.delete(itemRef);
            } else {
                batch.set(itemRef, { quantity: item.quantity, price: item.price }, { merge: true });
            }
        });
        await batch.commit();
    }
};
