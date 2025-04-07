import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { ContentsAddTable } from "../components/ContentsAddTable";
import { ContentsListTable } from "../components/ContentsListTable";
import LoadingComponent from "../components/LoadingComponent";
import CommonContainer from "../components/CommonContainer";

const ContentsAdminPage = () => {
    const [contents, loading] = useCollectionData(
        collection(firestore, "contents"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        },
    );

    return (
        <CommonContainer>
            <h1 className="text-center mb-4">Contenidos</h1>

            <h2 className="table-section-title">
                Agregar nuevo contenido
            </h2>
            <ContentsAddTable />

            <h2 className="table-section-title">
                Lista de contenidos
            </h2>

            {loading
                ? <LoadingComponent />
                : <ContentsListTable contents={contents} />}
        </CommonContainer>
    );
};

export default ContentsAdminPage;
