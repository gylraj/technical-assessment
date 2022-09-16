import axios from "axios";
import { useEffect } from "react";
import { Badge, Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImageSlider from "../../components/ImageSlider";
import StarRating from "../../components/StarRating";
import { storeDevices } from "../../features/device";

const DeviceInfo = () => {
  const { mId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const devices = useSelector((state) => state.devices.value).devices;

  const device = devices.find((item) => item.mId === mId);

  useEffect(() => {
    if (!devices.length) {
      axios
        .get("devices.json")
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            dispatch(storeDevices({ devices: res.data.skus }));
          } else {
            alert("There was an error while retrieving the data");
          }
        })
        .catch((e) => {
          alert("There was an error while retrieving the data");
        });
    }
  }, []);

  if (!device && !devices.length) {
    return <Navigate to="/" replace />;
  }

  const imageUrls = device?.mAlternateImages
    ?.split(",")
    ?.filter(Boolean)
    ?.map((url) => "https:" + url.replace("https:"));

  const features = device.taxoCategories.taxoFeatures.map(({ displayName }) => (
    <tr>
      <td>{displayName}</td>
    </tr>
  ));

  const categories = device.mCategories.map((category, i) => (
    <Pill pill bg="success" key={`${category}-${i}`}>
      {category}
    </Pill>
  ));

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Wrapper>
              <BackButton variant="link" onClick={() => navigate("/")}>
                Back
              </BackButton>
              <MainContainer>
                <Row>
                  <Col md={3} xs={12}>
                    <ImageSlider
                      imageUrls={imageUrls}
                      defaultImage={device.mMobileImageUrl}
                    />
                  </Col>

                  <Col md={5} xs={12}>
                    <Brand pill bg="secondary">
                      {device.mBrand}
                    </Brand>
                    <Title>{device.mName || device.skuDisplayName}</Title>
                    <Description
                      dangerouslySetInnerHTML={{
                        __html: device.mCQDescription || device.mDescription,
                      }}
                    />
                    <Price>{`$${device.msrp}`}</Price>

                    <StarRating
                      rating={device?.mStarRatings}
                      numReview={device.mNumOfStarReviews}
                    />
                    <Box />
                    {categories}
                    <Box />
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <td>Features</td>
                        </tr>
                      </thead>
                      <tbody>{features}</tbody>
                    </Table>

                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <td>Operating System</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {
                              device.taxoCategories.taxoOperatingSystem[0]
                                .displayName
                            }
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <td>Internal Memory</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {device.internalMemory +
                              " " +
                              device.internalMemoryUOM}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </MainContainer>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Pill = styled(Badge)`
  margin-right: 5px;
`;

const Box = styled.div`
  padding: 3px;
`;

const BackButton = styled(Button)``;

const Wrapper = styled.div`
  margin: 50px 0;
`;

const MainContainer = styled(Container)`
  margin-top: 50px;
`;

const Brand = styled(Badge)``;

const Title = styled.h2``;

const Description = styled.p``;

const Price = styled.h5`
  padding: 5px;
  color: red;
`;

export default DeviceInfo;
