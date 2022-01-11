import React from 'react';
import Layout from '../components/Layout';
import { initContract } from '../components/near';
import ProposalsGeneral from '../components/home/ProposalsGeneral';
import Loading from '../components/common/Loading'
function home() {

    const [proposals, setProposals] = React.useState([]);
    const [contract, setContract] = React.useState(null);

    const init = async () => {
        const { contract } = await initContract();
        contract.getAllProposals().then(setProposals)
    }



    React.useEffect(
        () => {
            init()

        }, []
    )
    return (
        <div>
            <Layout>
                {proposals.length > 0 ?
                    <ProposalsGeneral proposals={proposals}></ProposalsGeneral>
                    :
                <div className="w-screen h-full p-0 bg-gray-200">
                    <Loading></Loading>
                </div>
                }
            </Layout>
        </div>
    )
}

export default home