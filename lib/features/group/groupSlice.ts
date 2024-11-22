import { getGroupsApi, getGroupByIdApi, createGroupApi, updateGroupApi, deleteGroupByIdApi } from './groupApi';
import { IGroup } from "@/type/type";
import { createAppSlice } from "./../../createAppSlice";
  
  interface IState {
    groups: IGroup[];
    group: IGroup;
  }
  const initialState: IState = {
    groups: [],
    group: {} as IGroup,
  };
  
  export const groupslice = createAppSlice({
    name: "group",
    initialState,
    reducers: (create) => ({
      getgroupsData: create.asyncThunk(
        async () => {
          return await getGroupsApi();
        },
        {
          fulfilled: (state, action) => {
            state.groups = action.payload;
          },
        }
      ),
      getgroupByIdData: create.asyncThunk(
        async (id: number) => {
          return await getGroupByIdApi(id);
        },
        {
          fulfilled: (state, action) => {
            state.group = action.payload;
          },
        }
      ),
      creategroupData: create.asyncThunk(
        async (obj: IGroup) => {
          return await createGroupApi(obj);
        },
      ),
      updategroupData: create.asyncThunk(
          async ({
              id,
              obj,
            }: {
              id: number;
              obj: IGroup;
            }) => {
              return await updateGroupApi({id, obj});
            },
            {fulfilled: (state, action) => {
              state.group = action.payload
            }}
      ),
      deletegroupByIdData : create.asyncThunk(
          async(id: number) => {
              return await deleteGroupByIdApi(id)
          }
      )
    }),
    selectors: {
      selectgroups: (app) => app.groups,
      selectgroup: (app) => app.group,
    },
  });
  
  
  export const {getgroupsData, getgroupByIdData, creategroupData, updategroupData,deletegroupByIdData} = groupslice.actions
  export const {
      selectgroups,selectgroup
  } = groupslice.selectors