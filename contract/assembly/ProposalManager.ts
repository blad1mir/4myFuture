import { Context, PersistentUnorderedMap, u128 } from "near-sdk-core";
import Proposal from './models/Proposal';
import User from './models/User';
import { proposals, userList } from "./Storage";

const index = i64(proposals.length); // counter based on the proposals length created 
//const initDate = String(context.blockTimestamp);
const initDate = 9

/**
 * function implemented for create proposals
 * it make sure that the user introduced is a registered user
 * and he/she it's the function sender and he/she don't
 * already have a proposal created or active
 * @param user The contract caller.
 * @param title The title of the proposal.
 * @param description description of the proposal.
 * @param finishDate finish of the proposal period.
 * @param photos photos that support the description provided.
 * @param amountNeeded the amount in USD needed to fund the user education.
 * @returns Proposal Object created.
 */ 
export function createProposal(

    title: string,
    description: string,
    finishDate: string,
    photos: Array<string>,
    amountNeeded: u128,
): Proposal {
    assert(userList.contains(Context.sender), "User not registered");
    assert(amountNeeded > u128.Zero, "Invalid proposal amount");
    assert(title.length > 3, "Invalid title");
    const newProposal = new Proposal(
        Context.sender,
        title,
        description,
        amountNeeded,
        initDate,
        finishDate,
        photos,
        proposals.length+1);
    proposals.set(proposals.length +1, newProposal);
    const userTemp = userList.getSome(Context.sender);
    userTemp.proposal = newProposal;
    userList.set(userTemp.id, userTemp);
    return newProposal;
}


