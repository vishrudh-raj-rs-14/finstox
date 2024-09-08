import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import axios from "axios";

const PricingList = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
});

const tiers = [
  {
    title: "Basic",
    price: "39",
    description: ["Practice", " -- ", " -- ", " -- ", " -- "],
    buttonText: "Proceed to pay",
    buttonVariant: "outlined",
  },
  {
    title: "Medium",
    //subheader: "Most popular",
    price: "179",
    description: ["Practice", "Analysis & improvement", " -- ", " -- "],
    buttonText: "Proceed to pay",
    buttonVariant: "contained",
  },
  {
    title: "Premium",
    price: "299",
    description: ["Practice", "Analysis & improvement", "Get Funded", "Phone & email support"],
    buttonText: "Proceed to pay",
    buttonVariant: "outlined",
  },
];

// const [book, setBook] = useState({
//   name: "The Fault In Our Stars",
//   author: "John Green",
//   img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
//   price: 250,
// });

const initPayment = (data) => {
  const options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: data.amount,
    currency: data.currency,
    //name: book.name,
    description: "Test Transaction",
    //image: book.img,
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyUrl = "process.env.REACT_APP_BACKEND_URL/api/payment/verify";
        const { data } = await axios.post(verifyUrl, response);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

const handlePaymentBasic = async () => {
  try {
    const orderUrl = "process.env.REACT_APP_BACKEND_URL/api/payment/orders";
    const { data } = await axios.post(orderUrl, { amount: tiers[0].price });
    console.log(data);
    initPayment(data.data);
  } catch (error) {
    console.log(error);
  }
};
export default function Pricing() {
  return (
    <DashboardLayout>
      <Container maxWidth="md" component="main">
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography component="h1" variant="h2" align="center" color="text.dark" gutterBottom>
            Pricing
          </Typography>
          {/* <Typography variant="h5" align="center" color="text.secondary" component="p">
            Quickly build an effective pricing table for your potential customers with this layout.
            It&apos;s built with default MUI components with little customization.
          </Typography> */}
        </Container>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={tier.title === "Enterprise" ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[400]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ₹{tier.price}
                    </Typography>
                    {/* <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography> */}
                  </Box>
                  <PricingList>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </PricingList>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={handlePaymentBasic}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
