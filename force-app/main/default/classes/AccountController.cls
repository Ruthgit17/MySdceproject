Public with sharing class AccountController {
// It is an account controller
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

    return [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}
