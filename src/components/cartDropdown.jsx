import { useRef } from "react";
import Button from "../layouts/Button";
import useScrollbar from "../hooks/useScrollbar";

const CartDropdown = ({ tableData }) => {
    const dropdownRef = useRef(null);
    const hasScrollbar = useScrollbar(dropdownRef, tableData?.data?.length);

    return (
        <div className="cartDropdown">
            <div
                className={`cartDropdown__items ${
                    hasScrollbar ? "scrollable" : ""
                }`}
                ref={dropdownRef}
            ></div>
            <Button buttonType="btn btn-primary">Go To Checkout</Button>
        </div>
    );
};

export default CartDropdown;
