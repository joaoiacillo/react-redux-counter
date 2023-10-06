import ArrowIcon from "../../assets/imgs/arrow.png";

const ArrowButton = ({ onClick, reversed = false }) => {
    const classes = ["arrow-button", reversed ? "reversed" : ""].join(" ");

    return (
        <button className={classes} onClick={onClick}>
            <img src={ArrowIcon} alt="arrow icon" />
        </button>
    );
};

export default ArrowButton;
