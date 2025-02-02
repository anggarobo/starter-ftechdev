import { Card } from "@packages/ui";
import { Outlet } from "@remix-run/react";

const FILEPATH = 'routes/users.tsx'

function Users() {
    return (
        <Card filepath={FILEPATH}>
            <Outlet />
        </Card>
    );
}

export default Users;