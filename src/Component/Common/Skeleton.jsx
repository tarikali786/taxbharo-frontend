import Skeleton from "@mui/material/Skeleton";

export const SkeletonLoading = ({ height = "100%" }) => {
  return <Skeleton variant="rounded" width={"100%"} height={height} />;
};
