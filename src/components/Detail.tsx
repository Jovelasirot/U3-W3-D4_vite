import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Detail from "../interfaces/Detail";

const Detail: React.FC = () => {
  const [detail, setDetail] = useState<Detail | null>(null);

  const params = useParams();
  const articleId = params.ArticleId;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const endPoint = `https://api.spaceflightnewsapi.net/v4/articles/${articleId}`;
        const response = await fetch(endPoint);

        if (response.ok) {
          const data: Detail = await response.json();
          console.log(data);
          setDetail(data);
        } else {
          throw new Error("Error while fetching Detail");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [articleId]);

  return (
    <Container>
      <Row>
        <Col>
          {detail && (
            <div className="d-flex flex-column ">
              <h3 className="mb-2">{detail.title}</h3>
              <img src={detail.image_url} alt={detail.title} />
              <div className="d-flex justify-content-between ">
                <p>{detail.news_site}</p>
                <div className="d-flex">
                  <p className="me-2">
                    date: {detail.updated_at.split("T")[0]}
                  </p>
                  <p>at {detail.updated_at.split("T")[1].split(".")[0]}</p>
                </div>
              </div>
              <span className="fs-5 text-start mt-2">{detail.summary}</span>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
