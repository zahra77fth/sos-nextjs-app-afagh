import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NotFoundPage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                backgroundColor: "#f8f9fa",
                padding: "24px",
            }}
        >
            <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
                404 - صفحه پیدا نشد
            </Typography>

            <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
                متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد.
            </Typography>

            <Link href="/" passHref>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#1158A7",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#0F5098" },
                    }}
                >
                    بازگشت به صفحه اصلی
                </Button>
            </Link>
        </div>
    );
}
