import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import CustomImage from "./CustomImage";
import { Badge } from "react-bootstrap";

function DeviceCard({ device, onClick }) {
  return (
    <NewCard>
      <CustomImage
        src={device.mMobileImageUrl}
        placeholderImg="/placeholder.png"
        errorImg="/placeholder.png"
      />
      <Card.Body>
        <Title>{device.mName || device.skuDisplayName}</Title>
        <Card.Text>
          <Description
            dangerouslySetInnerHTML={{
              __html: device.mCQDescription || device.mDescription,
            }}
          />
        </Card.Text>
        <FlexBox>
          <div>
            <BrandText pill bg="secondary">
              {device.mBrand}
            </BrandText>
          </div>
          <PriceText>
            $<span>{device.mPrice}</span>
          </PriceText>
        </FlexBox>
        <ViewMoreButton variant="success" onClick={onClick}>
          View More Details
        </ViewMoreButton>
        {/* <Card.Text>Brand: {device.mBrand}</Card.Text>
        <Card.Text>
          Categories: {device.mCategoriesDisplayName.join(",")}
        </Card.Text>
        <PriceText>
          $<span>{device.mPrice}</span>
        </PriceText> */}
      </Card.Body>
    </NewCard>
  );
}

const NewCard = styled(Card)`
  margin-top: 10px;
  overflow: hidden;
`;

const Title = styled(Card.Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 50px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceText = styled.p`
  color: red;
  font-weight: bold;
  font-size: 18px;
`;

const BrandText = styled(Badge)``;

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ViewMoreButton = styled(Button)`
  width: 100%;
  font-weight: bold;
`;

export default DeviceCard;
