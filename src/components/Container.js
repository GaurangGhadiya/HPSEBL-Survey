import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { TopCard } from "./TopCard";
import Filters from "./dashboard/filters";
import { onDashboarFilters } from "../network/actions/dashboardFilter";
import formatNumber from "../utils/NumberFormat";

const Dashboard = () => {
  /**
   * Dashboard Object
   */
  const [surveyInfo, setSurveyInfo] = useState([]);
  const [verificationInfoList, setVerificationInfoList] = useState([]);
  const [aadhaarEkycInfoList, setAadhaarEkycInfoList] = useState([]);
  const [economicCategoryInfoList, setEconomicCategoryInfoList] = useState([]);
  const [retainInInfoList, setRetainInInfoList] = useState([]);

  const [buildingData, setBuildingData] = useState([])
  const [hotelData, setHotelData] = useState([])
  const [Loader, setLoader] = useState(false)

  const [filterData, setFilterData] = useState({
    district: "",
    municipal: "",
    ward: "",
    block: "",
    panchayat: "",
    village: "",
  })
  const dispatch = useDispatch();
  const dashboardFilterState = useSelector(
    (state) => state.dashboardFilterRedux
  );

  const handleFilterChange = (data) => {
    setFilterData(data)
    dispatch(onDashboarFilters(data, setLoader));
  };

  useEffect(() => {
    dispatch(onDashboarFilters(filterData, setLoader));
  }, []);

  useEffect(() => {
    if (dashboardFilterState?.data) {
      // const { data, status, message } = dashboardFilterState.data || {};
      if (dashboardFilterState?.data) {
        // Set the parsed data to state variables
        setSurveyInfo(dashboardFilterState?.data?.surveyInfoList);
        setBuildingData(dashboardFilterState?.data?.buldingSurveyInfo);
        setHotelData(dashboardFilterState?.data?.hotelSurveyInfo);
        setVerificationInfoList(dashboardFilterState?.data?.verificationInfoList);
        setAadhaarEkycInfoList(dashboardFilterState?.data?.aadhaarEkycInfoList);
        setEconomicCategoryInfoList(dashboardFilterState?.data?.economicCategoryInfoList);
        setRetainInInfoList(dashboardFilterState?.data?.retainInInfoList);
      } else {
        console.warn("No data in dashboardFilterState");
      }
    } else {
      console.warn("No data in dashboardFilterState");
    }
  }, [dashboardFilterState]);

  // if (Loader) {
  //   return <p>fsdf</p>;
  // }
  return (
    surveyInfo?.length > 0 ?  <>
      <Filters onChange={handleFilterChange} />
      {Loader == true ? <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={"70vh"}><CircularProgress /></Box> :<main className="p-6 space-y-6">
        {surveyInfo?.length > 0 && (
          <>
            <Box
              style={{ background: "#074465", color: "#FFF", borderRadius: 6 }}
            >
              <Typography
                fontSize={20}
                fontStyle={700}
                textAlign={"left"}
                style={{ paddingLeft: 10 }}
              >
                Survey Status
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TopCard
                  top_header_data={surveyInfo.map((item) => ({
                    label: item.headerName.toUpperCase(),
                    value: item.headerValueCount ? formatNumber(item.headerValueCount) : 0,
                    color: "red", // You can customize this color based on your requirements
                  }))}
                />
              </Grid>
            </Grid>
          </>
        )}

        {hotelData?.length > 0 && (
          <>
            <Box
              style={{ background: "#074465", color: "#FFF", borderRadius: 6 }}
            >
              <Typography
                fontSize={20}
                fontStyle={700}
                textAlign={"left"}
                style={{ paddingLeft: 10 }}
              >
                Hotel Survey
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TopCard
                  top_header_data={hotelData.map((item) => ({
                    label: item.headerName.toUpperCase(),
                    value: item.headerValueCount ? formatNumber(item.headerValueCount) : 0,
                    color: "red", // You can customize this color based on your requirements
                  }))}
                />
              </Grid>
            </Grid>
          </>
        )}
        {buildingData?.length > 0 && (
          <>
            <Box
              style={{ background: "#074465", color: "#FFF", borderRadius: 6 }}
            >
              <Typography
                fontSize={20}
                fontStyle={700}
                textAlign={"left"}
                style={{ paddingLeft: 10 }}
              >
                Domestic Consumers Survey
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TopCard
                  top_header_data={buildingData.map((item) => ({
                    label: item.headerName.toUpperCase(),
                    value: item.headerValueCount ? formatNumber(item.headerValueCount) : 0,
                    color: "red", // You can customize this color based on your requirements
                  }))}
                />
              </Grid>
            </Grid>
          </>
        )}
        {verificationInfoList?.length > 0 && (
          <>
            <Box
              style={{ background: "#074465", color: "#FFF", borderRadius: 6 }}
            >
              <Typography
                fontSize={20}
                fontStyle={700}
                textAlign={"left"}
                style={{ paddingLeft: 10 }}
              >
                Verification Status
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TopCard
                  top_header_data={verificationInfoList.map((item) => ({
                    label: item.headerName.toUpperCase(),
                    value: item.headerValueCount ? item.headerValueCount : 0,
                    color: "red", // You can customize this color based on your requirements
                  }))}
                />
              </Grid>
            </Grid>
          </>
        )}

        {aadhaarEkycInfoList?.length > 0 && (
          <>
            <Box
              style={{ background: "#074465", color: "#FFF", borderRadius: 6 }}
            >
              <Typography
                fontSize={20}
                fontStyle={700}
                textAlign={"left"}
                style={{ paddingLeft: 10 }}
              >
                Aadhaar eKYC Status
              </Typography>
            </Box>

            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TopCard
                  top_header_data={aadhaarEkycInfoList.map((item) => ({
                    label: item.headerName.toUpperCase(),
                    value: item.headerValueCount ? item.headerValueCount : 0,
                    color: "red", // You can customize this color based on your requirements
                  }))}
                />
              </Grid>
            </Grid>
          </>
        )}



      {economicCategoryInfoList?.length > 0 && (
          <>
            <Box
              style={{ background: "#074465", color: "#FFF", borderRadius: 6 }}
            >
              <Typography
                fontSize={20}
                fontStyle={700}
                textAlign={"left"}
                style={{ paddingLeft: 10 }}
              >
                Economic Status (Family)
              </Typography>
            </Box>

            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TopCard
                  top_header_data={economicCategoryInfoList.map((item) => ({
                    label: item.headerName.toUpperCase(),
                    value: item.headerValueCount ? item.headerValueCount : 0,
                    color: "red", // You can customize this color based on your requirements
                  }))}
                />
              </Grid>
            </Grid>
          </>
        )}



      {retainInInfoList?.length > 0 && (
          <>
            <Box
              style={{ background: "#074465", color: "#FFF", borderRadius: 6 }}
            >
              <Typography
                fontSize={20}
                fontStyle={700}
                textAlign={"left"}
                style={{ paddingLeft: 10 }}
              >
               Urban / Rural Family Retention  Status
              </Typography>
            </Box>

            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TopCard
                  top_header_data={retainInInfoList.map((item) => ({
                    label: item.headerName.toUpperCase(),
                    value: item.headerValueCount ? item.headerValueCount : 0,
                    color: "red", // You can customize this color based on your requirements
                  }))}
                />
              </Grid>
            </Grid>
          </>
        )}


      </main>}
    </> : <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={"90vh"}><CircularProgress /></Box>
  );
};

export default Dashboard;
