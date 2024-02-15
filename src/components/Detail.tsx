import { useEffect, useState } from "react";
import { Button, Col, Container, Placeholder, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import IDetail from "../interfaces/IDetail";

const Detail = () => {
  // const [detail, setDetail] = useState<IDetail[]>([]);
  const [detail, setDetail] = useState<IDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const articleId = params.ArticleId;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const endPoint = `https://api.spaceflightnewsapi.net/v4/articles/${articleId}`;
        const response = await fetch(endPoint);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setLoading(false);
          setDetail(data);
        } else {
          setLoading(false);
          throw new Error("Error while fetching Detail");
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchDetails();
  }, [articleId]);

  return (
    <Container>
      <Row className="align-items-center vh-100">
        <Col className="shadow bg-light text-dark rounded-1 ">
          <Button variant="primary" className="text-white mt-2 ">
            <Link to="/" className="nav-link ">
              Go Back
            </Link>
          </Button>
          {loading ? (
            <Row>
              <div className="text-start ">
                <Placeholder animation="glow">
                  <Placeholder xs={2} />
                  <Placeholder xs={4} />
                  <Placeholder xs={8} />
                </Placeholder>
              </div>
              <div className="text-start  mt-5">
                <Placeholder animation="glow">
                  <Placeholder xs={2} />
                </Placeholder>
              </div>
            </Row>
          ) : (
            detail && (
              <div className="d-flex flex-column  p-3 ">
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
                <a href={detail.url}>Based on this article</a>
              </div>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
