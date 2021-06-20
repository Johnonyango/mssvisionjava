package com.systech.mss.controller.impl;

import com.systech.mss.controller.DocumentsController;
import com.systech.mss.controller.vm.ErrorVM;
import com.systech.mss.controller.vm.PostFormByIdVM;
import com.systech.mss.controller.vm.SuccessVM;
import com.systech.mss.domain.ClaimDocuments;
import com.systech.mss.domain.Documents;
import com.systech.mss.domain.MemberSubmittedDocs;
import com.systech.mss.domain.User;
import com.systech.mss.fileupload.FileModel;
import com.systech.mss.repository.MemberSubmittedDocsRepository;
import com.systech.mss.repository.UserRepository;
import com.systech.mss.service.ClaimDocumentsService;
import com.systech.mss.service.ProfileService;
import com.systech.mss.service.UserService;
import com.systech.mss.seurity.DateUtils;
import com.systech.mss.vm.DocumentsVM;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;
import org.json.simple.parser.ParseException;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

public class DocumentsControllerImpl extends BaseController implements DocumentsController {

    @Inject
    UserRepository userRepository;

    @Inject
    UserService userService;

    @Inject
    ProfileService profileService;

    @Inject
    MemberSubmittedDocsRepository memberSubmittedDocsRepository;


    @Inject
    private ClaimDocumentsService claimDocumentsService;

    @Override
    public Response uploadFile(long mssuserid, MultipartFormDataInput input) throws ParseException {

        List<FileModel> fileModels = upload(input);
        if (fileModels == null) {
            return ErrorMsg("Upload failed");
        }

        User user = userRepository.find(mssuserid);
        if (user != null) {
            saveFiles(user, fileModels);
        }

        return Response.status(200)
                .entity(SuccessVM.builder().success(true).data(fileModels).build()).build();
    }

    @Override
    public Response uploadDocument(@Valid DocumentsVM documentsVM) {
        User user = userRepository.find(documentsVM.getUserId());
        if (user != null) {
            Documents documents = Documents.getDocumentsInstance(user, documentsVM);
            Documents dc = documentRepository.create(documents);
            if (dc != null) {
                logActivityTrail(user.getId(), "Uploaded document");
                return Response.status(Response.Status.OK)
                        .entity(SuccessVM.builder().success(true)
                                .data("Document successfully saved").build())
                        .build();
            }
            return ErrorMsg("Please try again");
        }
        return ErrorMsg("Kindly login");
    }

    @Override
    public Response getUserUploadedDocs(long userId) {
        User user = userRepository.find(userId);
        if (user != null) {
            List<Documents> documentsList = documentRepository.getUserUploadedDocs(user);
            logActivityTrail(userId, "Get uploaded documents");
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true)
                            .data(setExtraInfo(documentsList)).build())
                    .build();
        }
        return ErrorMsg("Kindly login");
    }

    @Override
    public Response getClaimUploadedDocs(long mssUserId, long claimId) {
        logActivityTrail(mssUserId, "fetched documents of claim id "+claimId);

        List<ClaimDocuments> claimDocuments=claimDocumentsService.getClaimDocuments(claimId);

        List<Documents> documentsList=new ArrayList<>();
        if(!claimDocuments.isEmpty()){
            for(ClaimDocuments claimDocuments1: claimDocuments){
                Documents documents=documentRepository.find(claimDocuments1.getDocumentId());
                documentsList.add(documents);
            }
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true)
                            .data(setExtraInfo(documentsList)).build())
                    .build();
        }
        return NotFoundErrorMsg("No documents found");
    }

    @Override
    public Response getAllForUserOnly(long userId) {
        User user = userRepository.find(userId);
        if (user != null) {
            List<Documents> documentsList = documentRepository.getAllForUserOnly(user);
            logActivityTrail(userId, "Get All Documents");
            return Response.status(Response.Status.OK)
                    .entity(SuccessVM.builder().success(true)
                            .data(setExtraInfo(documentsList)).build()
                    )
                    .build();
        }
        return ErrorMsg("Kindly login");
    }

    @Override
    public Response getForPublicOnly() {
        List<Documents> documentsList = documentRepository.getForPublicOnly();
        return Response.status(Response.Status.OK)
                .entity(SuccessVM.builder().success(true)
                        .data(setExtraInfo(documentsList)).build())
                .build();
    }

    @Override
    public Response getDocumentsForApproval() {
        return Response.status(Response.Status.OK)
                .entity(SuccessVM.builder().success(true)
                        .data(memberSubmittedDocsRepository.getDocumentsForApproval()).build())
                .build();
    }

    @Override
    public Response getDocumentsForApprovalByMemberId(long memberId) {
        return Response.status(Response.Status.OK)
                .entity(SuccessVM.builder().success(true)
                        .data(memberSubmittedDocsRepository.getDocumentsForApprovalByMemberId(memberId)).build())
                .build();
    }

    @Override
    public Response approveDocuments(@Valid PostFormByIdVM postFormByIdVM) {
        logActivityTrail(postFormByIdVM.getUserId(), "Approved Documents");
        MemberSubmittedDocs memberSubmittedDocs = memberSubmittedDocsRepository.find(postFormByIdVM.getId());
        if (memberSubmittedDocs != null) {
            memberSubmittedDocs.setApproved(true);
            memberSubmittedDocsRepository.edit(memberSubmittedDocs);
            return Response.ok()
                    .entity(SuccessVM
                            .builder()
                            .success(true)
                            .msg("Document is successfully Certified")
                            .build())
                    .build();
        }
        return Response.status(Response.Status.NOT_FOUND)
                .entity(ErrorVM
                        .builder()
                        .success(false)
                        .msg("Document not found")
                        .build())
                .build();
    }

    public List<Documents> setExtraInfo(List<Documents> documents) {
        for (Documents doc :
                documents) {
            doc.setFromUserFullName(userService.getUsersFullNameById(
                    doc.getFromUserId().getId()
            ));
            doc.setFromUserId(doc.getFromUserId().getId());
            doc.setProfileName(profileService.getProfileNameById(doc.getForProfileId()));
            if (doc.getCreatedAt() != null)
                doc.setShortDate(DateUtils.shortDate(doc.getCreatedAt()));
        }
        return documents;
    }
}
