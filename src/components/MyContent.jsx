import { ReactComponent as DownloadIcon } from '../assets/svg/download.svg';
import { programs } from '../information';
import { doc, firestore } from '../firebase/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import './MyContent.css';
const MyContent = ({ loggedUser }) => {
    const [loggedUserInfo] = useDocumentData(
        doc(firestore, 'users', loggedUser?.uid),
    );

    const filteredPrograms = Object.values((programs))
        .filter((program) => program.allowedCategories
            .includes(loggedUserInfo?.category));

    return (
        <div>
            <h1>Mis contenidos</h1>

            <h3 className="mt-4">Programas</h3>
            <div className="table-container">
                <table>
                    <thead className="table-header">
                        <tr>
                            <th className="text-left w-25">Programa</th>
                            <th className="text-left description-column">Descripción</th>
                            <th className="table-download text-center w-25">Descargar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredPrograms.map((program) => (
                                <tr key={program.name}>
                                    <td className="text-left">{program.name}</td>
                                    <td className="text-left">{program.description}</td>
                                    <td className="table-download text-center">
                                        <a href={program.pdf} download>
                                            <DownloadIcon width={40} height={40} />
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyContent;
