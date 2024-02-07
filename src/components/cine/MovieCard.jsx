import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../../contexts";
import { getImgUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

/* eslint-disable react/prop-types */
export default function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { state, dispatch } = useContext(MovieContext);

    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };

    const handleAddToCart = (event, movie) => {
        event.stopPropagation();
        const found = state.cartData.find((item) => item.id === movie.id);
        if (!found) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...movie,
                },
            });
            toast.success("Item added to cart", {
                position: "bottom-right",
            });
        } else {
            toast.error("Item already in cart", {
                position: "bottom-right",
            });
        }
    };

    return (
        <>
            {showModal && (
                <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
                    <MovieDetailsModal
                        movie={selectedMovie}
                        onClose={handleModalClose}
                        onCartAdd={handleAddToCart}
                    />
                </div>
            )}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img
                        className="w-full object-cover"
                        src={getImgUrl(movie.cover)}
                        alt={movie.cover}
                    />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">
                            {movie.genre}
                        </p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                        <div
                            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            onClick={(e) => handleAddToCart(e, movie)}
                        >
                            <img src="./assets/tag.svg" alt="" />
                            <span>${movie.price} | Add to Cart</span>
                        </div>
                    </figcaption>
                </a>
            </figure>
        </>
    );
}
