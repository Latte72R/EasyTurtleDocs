import { Metadata } from "next";
import MainContent from "../components/MainContent";
import Container from "@/app/components/Container";

export const metadata: Metadata = {
    title: 'License',
    openGraph: {
        title: 'License',
    },
    alternates: {
        canonical: '/license',
    }
};

export default function LicensePage() {
    return (
        <MainContent>
            <Container>
                <section className="home" id="home">
                    <h2 className="title">ライセンス</h2>
                    <div>
                        <h3>MIT License</h3>
                        <br />
                        <p>Copyright (c) 2020-2025 Latte72.</p>
                        <br />
                        <p>
                            このライセンスでは、ソフトウェアの複製を使用、複写、変更、結合、掲載、頒布、サブライセンス、および以下に定める条件に従い、本ソフトウェアおよび関連文書のファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、ソフトウェアを無制限に扱うことを無償で許可します。
                        </p>
                        <p>
                            これには、ソフトウェアの複製を使用、複写、変更、結合、掲載、頒布、サブライセンス、販売する権利、およびソフトウェアを提供する相手に同じことを許可する権利も無制限に含まれます。
                        </p>
                        <br />
                        <p>
                            上記の著作権表示および本許諾表示を、ソフトウェアのすべての複製または重要な部分に記載するものとします。
                        </p>
                        <br />
                        <p>
                            ソフトウェアは「現状のまま」で、明示であるか暗黙であるかを問わず、何らの保証もなく提供されます。
                        </p>
                        <p>
                            ここでいう保証とは、商品性、特定の目的への適合性、および権利非侵害についての保証も含みますが、それに限定されるものではありません。
                        </p>
                        <p>
                            作者または著作権者は、契約行為、不法行為、またはそれ以外であろうと、ソフトウェアに起因または関連し、あるいはソフトウェアの使用またはその他の扱いによって生じる一切の請求、損害、その他の義務について何らの責任も負わないものとします。
                        </p>
                    </div>
                </section>
            </Container>
        </MainContent>
    );
}
