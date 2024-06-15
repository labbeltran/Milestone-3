import { doc, writeBatch, getDoc } from "firebase/firestore";
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

export async function fetchItemPrice(itemId: string): Promise<number> {
    try {
      const itemRef = doc(firestore, 'cart', itemId); // Adjust 'storeItems' to your Firestore collection
      const itemDoc = await getDoc(itemRef);
  
      if (itemDoc.exists()) {
        const itemData = itemDoc.data();
        const price = itemData.price; // Assuming 'price' is a field in your Firestore document
        return price;
      } else {
        throw new Error(`Document ${itemId} not found in cart`);
      }
    } catch (error) {
      console.error('Error fetching item price:', error);
      throw error; // Rethrow the error to be handled where fetchItemPrice is called
    }
  }