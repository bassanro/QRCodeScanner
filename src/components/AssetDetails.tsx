import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Card, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import infotrackogo from './infotrack-logo-small.png';


class Model
{
    id!: string | undefined;
    name?: string | undefined;
}

class AssetDetailsClass
{
    Id!: string;
    name?: string | undefined;
    asset_Tag?: string | undefined;
    serial?: string | undefined; //DO NOT SHOW, Some issue
    model?: Model | undefined;
    model_number?: string |undefined;
}

export const AssetDetails = () => {
    const params = useParams();
    const [assetResults, setAssetResults] = useState<AssetDetailsClass|undefined|null>();

    console.log(params);
    console.log(assetResults);

    useEffect(() => {
        async function lookup() {
            axios.get<AssetDetailsClass>(`https://server/api/harware/${params}`)
            .then(res => {
              const assetDetails = res.data;
              setAssetResults(assetDetails);
            })
        }
        void lookup();
    }, [params]);


    return (
        <Fragment>
            <div className="container-fluid login_container">
                <div className="row login_head">
                    <div className="col-md-3">
                        <a className="brand_logo" rel="home" href="/" title="infotrack">
                            <img alt="infotrack logo" src={infotrackogo} />
                        </a>
                        <label>
                            <span className="brand">iAsset</span>
                        </label>
                    </div>
                </div>
                    <div className="row login_content">
                        <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <section>
                                <Card >
                                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                    <Card.Body>
                                        <Card.Title>Asset Details</Card.Title>
                                        <Card.Text>
                                        <Table striped bordered hover variant="dark">
                                            <tbody>
                                                <tr>
                                                    <td>AssetName</td>
                                                    <td>{assetResults?.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Asset Tag</td>
                                                    <td>{assetResults?.asset_Tag}</td>
                                                </tr>
                                                <tr>
                                                    <td>AssetName</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Model Name</td>
                                                    <td>{assetResults?.model?.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Model Number</td>
                                                    <td>{assetResults?.model_number}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </section>
                            </div>
                        </div>
                    </div>
        </Fragment>
    )
}