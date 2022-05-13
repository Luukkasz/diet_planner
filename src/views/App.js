import React, {useEffect, useState, useRef} from "react";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from '../firebase';
import {Routes, Route} from "react-router-dom";
import './App.scss';
import Navigation from "../components/Navigation/Navigation";
import MainPage from "./MainPage";
import AddProduct from "./AddProduct";
import MyPlans from "./MyPlans";


function App() {
    const initialNewProduct = {
        name: '',
        proteins: '',
        carbs: '',
        fats: '',
        weight: '',
    };

    const [newProduct, setNewProduct] = useState(initialNewProduct);
    const [productList, setProductList] = useState([]);
    const [singlePlan, setSinglePlan] = useState([]);
    const [planList, setPlanList] = useState([]);
    const isInitialMount = useRef(true);
    const isInitialMount2 = useRef(true);

    //Save productList to firebase database
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const save = async () => {
                await setDoc(doc(db, "productList", "productList"), {
                    ...productList
                });
                console.log('uaktualniono liste produktów');
            };
            save()
        }
    }, [productList]);


    //Save PlanList to firebase database
    useEffect(() => {
        if (isInitialMount2.current) {
            isInitialMount2.current = false;
        } else {
            const save = async () => {
                await setDoc(doc(db, "planList", "planList"), {
                    ...planList
                });
                console.log('uaktualniono liste planow');
            };
            save()
        }
    }, [planList]);


    //Get productList from firebase database
    useEffect(() => {
        const load = async () => {
            const docRef = doc(db, "productList", "productList");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProductList(Object.values(docSnap.data()));

            } else {
                console.log("No such document!");
            }
        }
        load();
    }, []);

    //Get planList from firebase database
    useEffect(() => {
        const load = async () => {
            const docRef = doc(db, "planList", "planList");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setPlanList(Object.values(docSnap.data()));

            } else {
                console.log("No such document!");
            }
        }
        load();
    }, []);


    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage
                    productList={productList}
                    setProductList={setProductList}
                    singlePlan={singlePlan}
                    setSinglePlan={setSinglePlan}
                    setPlanList={setPlanList}
                />}/>
                <Route path="addProduct" element={<AddProduct
                    newProduct={newProduct}
                    setNewProduct={setNewProduct}
                    productList={productList}
                    setProductList={setProductList}
                    initialNewProduct={initialNewProduct}
                    setSinglePlan={setSinglePlan}
                />}/>
                <Route path="myPlans" element={<MyPlans
                    planList={planList}
                    setPlanList={setPlanList}

                />}/>
            </Routes>
        </>
    );
}

export default App;
