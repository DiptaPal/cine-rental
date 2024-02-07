/* eslint-disable react/prop-types */
import star from "../../assets/star.svg";
export default function Rating({ value }) {
    const starts = Array(value).fill(star);
    return (
        <>
            {starts.map((star, index) => (
                <img key={index} src={star} width="14" height="14" alt="star" />
            ))}
        </>
    );
}
