Set(
    serchresult,
    PowerAppsDelegade.Run("(" & TextInput1 & ")AND(ListId:f69f960e-ea83-49b3-9133-a4e223a7934a)").result
);
ClearCollect(
    Col_Json,
    {
        Title: "データがありません",
        Author: "",
        ListItemID: ""
    }
);
With(
    {
        TableFromJson: MatchAll(
            serchresult,
            "\{""Title"":""(?<Title>[^""]*)"",""ListItemID"":""(?<ListItemID>[^""]*)"",""Author"":""(?<Author>[^""]*)""\}"
        )
    },
    If(
        CountRows(TableFromJson) > 0,
        ClearCollect(
            Col_Json,
            ShowColumns(
                TableFromJson,
                "Title",
                "Author",
                "ListItemID"
            )
        )
    )
);
