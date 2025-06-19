import { GroupModal, GroupForm } from "@/components/feature/group";
import {
  GroupSettingTrigger,
} from "./group-chat/_components/group-setting-trigger.component";
import { GroupList } from "./group-chat/_components/group-list.component";
import { GroupCreateButton } from "./group-chat/_components/group-create-button.component";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <GroupCreateButton />
        <GroupSettingTrigger />

        <section>
          <GroupList />
        </section>

        <GroupModal>
          <GroupForm />
        </GroupModal>
      </main>
    </div>
  );
}
