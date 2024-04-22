import React, { useState, useEffect } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import Button from "./Button"; // Import the Button component

const ProductCard = ({ id, name, image, price, company }) => {
    return (
        <Card
            sx={{
                maxWidth: 300,
                margin: "20px",
                border: "2px solid red", // Add a black border
                height: "200px%", // Ensure cards have equal heights
                width: "100%", // Ensure cards have equal widths
                display: "flex", // Flex to control card content alignment
                flexDirection: "column", // Stack content vertically
                justifyContent: "space-between", // Space evenly inside card
                marginTop: "10px", // Bring down the top border
            }}
        >
            <CardMedia
                component="img"
                height="125"
                image={image}
                alt="Product Photo"
                sx={{
                    marginTop: "80px", // Adjust margin top if needed
                    objectFit: "contain", // Maintain aspect ratio of image
                }}
            />
            <CardContent>
                <Typography variant="h7" component="div">
                    Name: {name}
                </Typography>
                <Typography variant="h6" component="div">
                    Price: {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Company: {company}
                </Typography>
                {/* Pass the product ID to the Button component */}
                <Button productId={id} />
            </CardContent>
        </Card>
    );
};

const Cards = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch card data from FakeStore API
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data); // Set fetched card data
                setLoading(false); // Set loading state to false
            })
            .catch(error => {
                setError(error); // Set error state
                setLoading(false); // Set loading state to false
            });
    }, []); // Empty dependency array means this effect runs once after the first render

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const chunkedProducts = Array.from({ length: Math.ceil(products.length / 3) }, (_, i) => products.slice(i * 3, i * 3 + 3));

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", // Align items in the center horizontally
                marginTop: "100px", // Add margin to create space below navbar
                height: "100%",
                width: "100%",
            }}
        >
            {chunkedProducts.map((row, index) => (
                <div key={index} style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    {row.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id} // Pass the product ID
                            image={product.image}
                            name={product.title}
                            price={product.price}
                            company={product.category}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Cards;

