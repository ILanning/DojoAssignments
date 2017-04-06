require_relative "bank_account"
RSpec.describe BankAccount do
  before(:each) do
    @account1 = BankAccount.new
  end
  it "has methods to check checking, savings, and total account balances" do
    expect(@account1.checking).to eq 0
    expect(@account1.savings).to eq 0
    expect(@account1.total).to eq 0
  end
  it "has methods to withdraw/deposit money from/to savings or checking" do
    @account1.deposit_checking 15
    @account1.deposit_savings 30
    @account1.withdraw_checking 6
    @account1.withdraw_savings 12
    expect(@account1.checking).to eq 9
    expect(@account1.savings).to eq 18
  end
  it "throws an error if you try to withdraw more than you have" do
    @account1.deposit_checking 15
    @account1.deposit_savings 30
    expect{@account1.withdraw_checking 16}.to raise_error ArgumentError
    expect{@account1.withdraw_savings 32}.to raise_error ArgumentError
  end
  it "throws an error when you try to retrieve the number of accounts" do
    expect{ x = BankAccount.num_of_accounts }.to raise_error NoMethodError
  end
  it "throws an error when yu try to set the interest rate" do
    expect{ @account1.interest_rate = 3 }.to raise_error NoMethodError
  end
end
