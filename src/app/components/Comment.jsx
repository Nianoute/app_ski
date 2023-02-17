import { Box, Rating, Typography } from "@mui/material";

const Comment = ({ data }) => {
  return (
    <>
      <Box sx={{ width: "50%", mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="p" sx={{ fontSize: 22, fontWeight: "medium" }}>
            {data?.username}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py: 3,
              px: 2,
              backgroundColor: "#193153",
              borderRadius: 2,
              width: "fit-content",
            }}
          >
            <Rating
              value={data?.stars}
              sx={{
                color: "#fff616"
              }}
              precision={0.5}
              readOnly
            />
          </Box>
        </Box>
        <Typography variant="p" sx={{ fontSize: 18 }}>
          {data.description}
        </Typography>
      </Box>
    </>
  );
};

export default Comment;