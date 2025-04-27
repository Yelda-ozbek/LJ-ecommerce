import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";
import { clearCart } from "../store/actions/cartActions";

const CreateOrder = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.client.user);
  const token = localStorage.getItem("token");

  const [addresses, setAddresses] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [isAddingNewCard, setIsAddingNewCard] = useState(false);

  const [newAddress, setNewAddress] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
  });

  const [newCard, setNewCard] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  const [editingAddress, setEditingAddress] = useState(null);
  const [editingCard, setEditingCard] = useState(null);

  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.count, 0);

  useEffect(() => {
    if (!user?.email) {
      history.push("/login");
    }
  }, [user, history]);

  useEffect(() => {
    if (cart.length === 0) {
      history.push("/shop");
    }
  }, [cart, history]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resAddresses = await axiosInstance.get("/user/address", { headers: { Authorization: token } });
        setAddresses(resAddresses.data);

        const resCards = await axiosInstance.get("/user/card", { headers: { Authorization: token } });
        setCards(resCards.data);
      } catch (error) {
        console.error("Veriler çekilemedi:", error);
      }
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  // Fetch functions
  const fetchAddresses = async () => {
    const res = await axiosInstance.get("/user/address", { headers: { Authorization: token } });
    setAddresses(res.data);
  };

  const fetchCards = async () => {
    const res = await axiosInstance.get("/user/card", { headers: { Authorization: token } });
    setCards(res.data);
  };

  // Add functions
  const handleAddAddress = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/user/address", newAddress, { headers: { Authorization: token } });
      toast.success(" Adres eklendi!");
      setIsAddingNewAddress(false);
      setNewAddress({ title: "", name: "", surname: "", phone: "", city: "", district: "", neighborhood: "" });
      fetchAddresses();
    } catch (error) {
      console.error(error);
      toast.error("Adres eklenemedi!");
    }
  };

  const handleAddCard = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/user/card", newCard, { headers: { Authorization: token } });
      toast.success("Kart eklendi!");
      setIsAddingNewCard(false);
      setNewCard({ card_no: "", expire_month: "", expire_year: "", name_on_card: "" });
      fetchCards();
    } catch (error) {
      console.error(error);
      toast.error("Kart eklenemedi!");
    }
  };

  // Delete functions
  const handleDeleteAddress = async (id) => {
    try {
      await axiosInstance.delete(`/user/address/${id}`, { headers: { Authorization: token } });
      toast.success(" Adres silindi!");
      fetchAddresses();
    } catch (error) {
      console.error(error);
      toast.error("Adres silinemedi!");
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await axiosInstance.delete(`/user/card/${id}`, { headers: { Authorization: token } });
      toast.success("Kart silindi!");
      fetchCards();
    } catch (error) {
      console.error(error);
      toast.error("Kart silinemedi!");
    }
  };

  // Update functions
  const handleUpdateAddress = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put("/user/address", editingAddress, { headers: { Authorization: token } });
      toast.success(" Adres güncellendi!");
      setEditingAddress(null);
      fetchAddresses();
    } catch (error) {
      console.error(error);
      toast.error("Adres güncellenemedi!");
    }
  };

  const handleUpdateCard = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put("/user/card", editingCard, { headers: { Authorization: token } });
      toast.success("Kart güncellendi!");
      setEditingCard(null);
      fetchCards();
    } catch (error) {
      console.error(error);
      toast.error("Kart güncellenemedi!");
    }
  };

  // Complete Order
  const handleCompleteOrder = () => {
    if (selectedAddressId && selectedCardId) {
      toast.success("Sipariş başarılı!");
      dispatch(clearCart());
      history.push("/complete-order");
    } else {
      toast.error("Adres ve kart seçmelisiniz!");
    }
  };

  return (
    <section className="px-4 md:px-20 py-10 flex flex-col lg:flex-row gap-10">
      {/* Sol */}
      <div className="flex-1 space-y-10">
        {/* Adres */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Adres Bilgileri</h2>

          {addresses.map((addr) => (
            <div key={addr.id} className="border p-4 rounded flex justify-between items-center mb-4">
              <div>
                <p>{addr.title} - {addr.name} {addr.surname}</p>
                <p className="text-gray-500">{addr.city}, {addr.district}, {addr.neighborhood}</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="address" value={addr.id} checked={selectedAddressId === addr.id} onChange={() => setSelectedAddressId(addr.id)} />
                <button onClick={() => setEditingAddress(addr)} className="text-blue-500 text-sm">Güncelle</button>
                <button onClick={() => handleDeleteAddress(addr.id)} className="text-red-500 text-sm">Sil</button>
              </div>
            </div>
          ))}

          {isAddingNewAddress ? (
            <form onSubmit={handleAddAddress} className="space-y-2 mt-4">
              <input type="text" placeholder="Başlık" className="border p-2 w-full" value={newAddress.title} onChange={(e) => setNewAddress({ ...newAddress, title: e.target.value })} />
              <input type="text" placeholder="Ad" className="border p-2 w-full" value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} />
              <input type="text" placeholder="Soyad" className="border p-2 w-full" value={newAddress.surname} onChange={(e) => setNewAddress({ ...newAddress, surname: e.target.value })} />
              <input type="text" placeholder="Telefon" className="border p-2 w-full" value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} />
              <input type="text" placeholder="Şehir" className="border p-2 w-full" value={newAddress.city} onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} />
              <input type="text" placeholder="İlçe" className="border p-2 w-full" value={newAddress.district} onChange={(e) => setNewAddress({ ...newAddress, district: e.target.value })} />
              <input type="text" placeholder="Mahalle" className="border p-2 w-full" value={newAddress.neighborhood} onChange={(e) => setNewAddress({ ...newAddress, neighborhood: e.target.value })} />
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Kaydet</button>
            </form>
          ) : (
            <button onClick={() => setIsAddingNewAddress(true)} className="bg-orange-500 text-white py-2 px-4 rounded">
              + Yeni Adres Ekle
            </button>
          )}

          {editingAddress && (
            <form onSubmit={handleUpdateAddress} className="space-y-2 mt-4">
              <input type="text" className="border p-2 w-full" value={editingAddress.title} onChange={(e) => setEditingAddress({ ...editingAddress, title: e.target.value })} />
              <input type="text" className="border p-2 w-full" value={editingAddress.name} onChange={(e) => setEditingAddress({ ...editingAddress, name: e.target.value })} />
              <input type="text" className="border p-2 w-full" value={editingAddress.surname} onChange={(e) => setEditingAddress({ ...editingAddress, surname: e.target.value })} />
              <input type="text" className="border p-2 w-full" value={editingAddress.phone} onChange={(e) => setEditingAddress({ ...editingAddress, phone: e.target.value })} />
              <input type="text" className="border p-2 w-full" value={editingAddress.city} onChange={(e) => setEditingAddress({ ...editingAddress, city: e.target.value })} />
              <input type="text" className="border p-2 w-full" value={editingAddress.district} onChange={(e) => setEditingAddress({ ...editingAddress, district: e.target.value })} />
              <input type="text" className="border p-2 w-full" value={editingAddress.neighborhood} onChange={(e) => setEditingAddress({ ...editingAddress, neighborhood: e.target.value })} />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Güncelle</button>
            </form>
          )}
        </div>

        {/* Kartlar */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ödeme Bilgileri</h2>

          {cards.map((card) => (
            <div key={card.id} className="border p-4 rounded flex justify-between items-center mb-4">
              <div>
                <p>{card.name_on_card}</p>
                <p className="text-gray-500">**** **** **** {card.card_no.slice(-4)} | {card.expire_month}/{card.expire_year}</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="card" value={card.id} checked={selectedCardId === card.id} onChange={() => setSelectedCardId(card.id)} />
                <button onClick={() => setEditingCard(card)} className="text-blue-500 text-sm">Güncelle</button>
                <button onClick={() => handleDeleteCard(card.id)} className="text-red-500 text-sm">Sil</button>
              </div>
            </div>
          ))}

          {isAddingNewCard ? (
            <form onSubmit={handleAddCard} className="space-y-2 mt-4">
              <input type="text" placeholder="Kart No" className="border p-2 w-full" value={newCard.card_no} onChange={(e) => setNewCard({ ...newCard, card_no: e.target.value })} />
              <input type="number" placeholder="Ay" className="border p-2 w-full" value={newCard.expire_month} onChange={(e) => setNewCard({ ...newCard, expire_month: e.target.value })} />
              <input type="number" placeholder="Yıl" className="border p-2 w-full" value={newCard.expire_year} onChange={(e) => setNewCard({ ...newCard, expire_year: e.target.value })} />
              <input type="text" placeholder="İsim" className="border p-2 w-full" value={newCard.name_on_card} onChange={(e) => setNewCard({ ...newCard, name_on_card: e.target.value })} />
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Kaydet</button>
            </form>
          ) : (
            <button onClick={() => setIsAddingNewCard(true)} className="bg-orange-500 text-white py-2 px-4 rounded">
              + Yeni Kart Ekle
            </button>
          )}

          {editingCard && (
            <form onSubmit={handleUpdateCard} className="space-y-2 mt-4">
              <input type="text" className="border p-2 w-full" value={editingCard.card_no} onChange={(e) => setEditingCard({ ...editingCard, card_no: e.target.value })} />
              <input type="number" className="border p-2 w-full" value={editingCard.expire_month} onChange={(e) => setEditingCard({ ...editingCard, expire_month: e.target.value })} />
              <input type="number" className="border p-2 w-full" value={editingCard.expire_year} onChange={(e) => setEditingCard({ ...editingCard, expire_year: e.target.value })} />
              <input type="text" className="border p-2 w-full" value={editingCard.name_on_card} onChange={(e) => setEditingCard({ ...editingCard, name_on_card: e.target.value })} />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Güncelle</button>
            </form>
          )}
        </div>
      </div>

      {/* Sağ - Sipariş Özeti */}
      <div className="w-full lg:w-1/3">
        <div className="border rounded p-6 shadow-md sticky top-24">
          <h3 className="text-xl font-bold mb-6">Sipariş Özeti</h3>
          <div className="flex justify-between mb-2">
            <span>Ürün Toplamı</span>
            <span>{totalPrice.toFixed(2)} ₺</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Kargo</span>
            <span>Bedava</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Toplam</span>
            <span>{totalPrice.toFixed(2)} ₺</span>
          </div>
          <button onClick={handleCompleteOrder} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold">
            Siparişi Tamamla
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateOrder;
